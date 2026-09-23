import { getObject, listDirectory } from '$lib/minio';
import type { Project } from '$lib/types';
import Bun from 'bun';
import type { PageServerLoad } from './$types';

const projectIdCapture = /\/?projects\/([0-9a-zA-Z_-]+)\.yml/;

export const load: PageServerLoad = async () => {
	const projectFiles = await listDirectory('projects/');

	const projects = (await Promise.all(
		projectFiles.map(async (project) => {
			return {
				...(Bun.YAML.parse(await getObject(project)) as { project: Project }).project,
				id: project.match(projectIdCapture)![1]
			};
		})
	)) as Project[];

	return {
		projects: projects
	};
};
