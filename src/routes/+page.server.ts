import type { Blog, Project } from '$lib/types';
import Bun from 'bun';
import type { PageServerLoad } from './$types';
import { blogIdCapture, blogPostMatch, projectIdCapture } from '$lib/regex';

export const load: PageServerLoad = async () => {
	const projectFiles = await Bun.s3.list({ prefix: 'projects/' });
	const blogFiles = await Bun.s3.list({ prefix: 'blog/' });

	const projects = (await Promise.all(
		projectFiles.contents!.map(async (project) => {
			return {
				...(Bun.YAML.parse(await Bun.s3.file(project.key).text()) as { project: Project }).project,
				id: project.key.match(projectIdCapture)![1]
			};
		})
	)) as Project[];

	const blogPosts = await Promise.all(
		blogFiles.contents!.map(async (blog) => {
			const data = await Bun.S3Client.file(blog.key).text();
			const match = data.match(blogPostMatch);
			const parsedMeta = Bun.YAML.parse(match![1]) as Omit<Blog, 'id'>;

			const metadata: Blog = {
				id: blog.key.match(blogIdCapture)![1],
				...parsedMeta
			};

			return metadata;
		})
	);

	return {
		projects: projects,
		blogs: blogPosts
	};
};
