import * as Minio from 'minio';

import { MINIO_ENDPOINT } from '$env/static/private';
import { MINIO_KEY } from '$env/static/private';
import { MINIO_SECRET } from '$env/static/private';

export const minioClient = new Minio.Client({
	endPoint: MINIO_ENDPOINT as string,
	port: 9000,
	useSSL: false,
	accessKey: MINIO_KEY as string,
	secretKey: MINIO_SECRET as string
});

export const listDirectory = (directory: string) => {
	return new Promise<string[]>((resolve) => {
		const stream = minioClient.listObjects('zme-v8', directory);

		const list: string[] = [];

		stream.on('data', (data) => {
			if (data.name != undefined) {
				list.push(data.name);
			}
		});

		stream.on('close', () => {
			resolve(list);
		});
	});
};

export const getObject = (object: string) => {
	return new Promise<string>((resolve) => {
		minioClient.getObject('zme-v8', object).then((stream) => {
			let data: string = '';

			stream.on('data', (chunk) => {
				data += chunk;
			});

			stream.on('close', () => {
				resolve(data);
			});
		});
	});
};
