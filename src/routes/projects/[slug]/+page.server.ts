import type { Project } from '$lib/types';
import Bun from 'bun';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	try {
		await Bun.s3.exists(`projects/${params.slug}.yml`);
		const data = await Bun.s3.file(`projects/${params.slug}.yml`).text();

		if (!data) {
			error(404, 'Not found');
		}

		const project = {
			...(Bun.YAML.parse(data) as { project: Project }).project,
			id: params
		};

		return {
			project: project
		};
	} catch (e) {
		if ((e as { code: string }).code === 'NotFound') {
			console.log('404 Not found');
			error(404, 'Not found');
		}
	}
};
