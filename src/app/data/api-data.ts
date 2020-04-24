export class MultiText {
  english: string;
  chinese?: string;
}

export class MultiDocument {
  english: Resource;
  chinese?: Resource;
}

export class Coordinate {
	latitute: number;
	longitude: number;
}

export class Resource {
  baseURL: string;
  filename: string;
}

export class Person {
	id?: string;
  portrait?: Resource;
  name: MultiText;
  title?: MultiText;
}

///////////////////////////////////////

export class Entity {
  id?: string;					// uuid as Id
  lastUpdated?: number;	// unix timestamp of UTC in Timestamp in Milliseconds
	deleted?: boolean;			// soft deleted or not

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

export class Comment {
  postor: Person;
  when: Date;
  title?: MultiText;
  text: MultiText;
}

export class Tag {
  label: string;			// one of: greeting, quote, sermon, event, testimory
  eventId?: string;
}

//////////////////////////////////////////////

export class Section {
  icon: Resource;
  title: MultiText;
  subtitle?: MultiText;
  image?: Resource;
  description?: MultiText;
  source?: MultiText;
}

export class ContactInfo {
	mainSite: Site;
  sites: Site[];
	contactImage: Resource;
}

export class Site {
  name: MultiText;
  address: string;
  contactors: Contactor[];
  email?: string;
}

export class Contactor {
  name: MultiText;
  phoneNumbers: string[];
  email?: string;
}

export class SliderItem {
  image: string;
  title: MultiText;
}

export class MenuItem {
  title: MultiText;
  route: string;
}

export class Story extends Entity {
  belongs: Tag[];			// tag set
  host: Person;
  address: MultiText;
  start: Date;
  minutes: number;
	comments: Comment[];
	videoId: string;
	reference: MultiText;
}


/////////////// Legacy ////////////////////////


export class Ministry {
  image: string;
  title: MultiText;
  text: MultiText;
}


