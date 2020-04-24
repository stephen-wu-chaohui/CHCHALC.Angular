import { Resource, MultiText, Person, Coordinate } from './api-data';

export class Church {
	info: Assemply;
	people: Person[];
	stories: Story[];
	sermons: Story[];
	cells: Assemply[];
	minitories: Assemply[];
}


export class Entity {
	id: string;		// uuid
	image: Resource;
	title: MultiText;
	subtitle: MultiText;
	description: MultiText;
}

export class Assemply extends Entity {
	address: MultiText;
	coordinate?: Coordinate;
	peopleIds?: string[];
	storyIds?: string[];
}


export class Story extends Entity {
	videoId: string;
	reference: MultiText;
}
