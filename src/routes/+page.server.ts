import { getObject, listDirectory } from '$lib/minio';
import type { Project } from '$lib/types';
import Bun from 'bun';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const projectFiles = await listDirectory('projects/');

	const projects = (await Promise.all(
		projectFiles.map(async (project) => Bun.YAML.parse(await getObject(project)))
	)) as { project: Project }[];

	return {
		projects: projects.map((project) => project.project)
	};
};
