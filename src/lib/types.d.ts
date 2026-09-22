export type Project = {
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
		type: 'website';
		url: string;
	};
	icon: string;
	gallery: string[];
};
