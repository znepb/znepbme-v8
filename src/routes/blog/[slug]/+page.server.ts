import type { Blog } from '$lib/types';
import Bun from 'bun';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { blogPostMatch } from '$lib/regex';

export const load: PageServerLoad = async ({ params }) => {
	try {
		await Bun.s3.exists(`blog/${params.slug}.md`);
		const data = await Bun.s3.file(`blog/${params.slug}.md`).text();

		if (!data) {
			error(404, 'Not found');
		}

		const match = data.match(blogPostMatch);
		const parsedMeta = Bun.YAML.parse(match![1]) as Omit<Blog, 'id'>;

		const metadata: Blog = {
			id: params.slug,
			...parsedMeta
		};

		return {
			metadata: metadata,
			content: match![2]
		};
	} catch (e) {
		if ((e as { code: string }).code === 'NotFound') {
			console.log('404 Not found');
			error(404, 'Not found');
		}
	}
};
