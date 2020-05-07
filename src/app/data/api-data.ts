export class MultiText {
  english: string;
  chinese?: string;
}

export class Coordinate {
  latitute: number;
  longitude: number;
}

export type Resource = string;

///////////////////////////////////////

export class Entity {
  id?: string;					// uuid as Id
  lastUpdated?: number;	// unix timestamp of UTC in Timestamp in Milliseconds
  deleted?: boolean;			// soft deleted or not

  start: number;  // unix timestamp of UTC in Timestamp in Milliseconds
  image: Resource;
  title: MultiText;
  subtitle: MultiText;
  description: MultiText;

  constructor() {
    this.id = null;
    this.deleted = false;
    this.lastUpdated = new Date().getTime();
    this.start = new Date().getTime();
  }
}

export class Person extends Entity {
  name: MultiText;
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
  minutes: number;
  comments: Comment[];
  reference: MultiText;
  pdfPath: string;
  videoURL: string;
  pictures: string[];
}

export class Church {
  info: Assemply;
  people: Person[];
  stories: Story[];
  sermons: Story[];
  cells: Assemply[];
  minitories: Assemply[];
}


/////////////// Legacy ////////////////////////


export class Ministry extends Assemply {
  id: string;
  deleted: boolean;
  image: string;
  title: MultiText;
  text: MultiText;

  constructor() {
    super();
  }
}

export class Greeting extends Entity {
  icon: Resource;
  title: MultiText;
  image: Resource;
  subtitle: MultiText;
  description: MultiText;
}
