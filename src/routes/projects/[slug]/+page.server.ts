import { getObject, minioClient } from '$lib/minio';
import type { Project } from '$lib/types';
import Bun from 'bun';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	try {
		await minioClient.statObject('zme-v8', `projects/${params.slug}.yml`);
		const data = await getObject(`projects/${params.slug}.yml`);

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
