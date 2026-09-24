export type Project = {
	id: string;
	name: string;
	blurb: string;
	status: 'finished' | 'deprecated' | 'paused' | 'inprogress' | 'active';
	category: string;
	startYear: number;
	endYear?: number;
	isFeatured?: boolean;
	description: string;
	technologies: string[];
	links: {
		type: 'website' | 'github';
		url: string;
	}[]?;
	icon: string;
	gallery: string[];
};

export type Blog = {
	id: string;
	title: string;
	category: string;
	cover: string;
	blurb: string;
	postDate: string;
	updatedDate: string;
	files: {
		name: string;
		size: number;
		url: string;
	}[];
};
