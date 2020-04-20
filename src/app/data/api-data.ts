export class MultiText {
  english: string;
  chinese?: string;
}

export class MultiDocument {
  english: Resource;
  chinese?: Resource;
}

export class Resource {
  baseURL: string;
  filename: string;
}

export class Person {
  portrait: Resource;
  name: MultiText;
  title: MultiText;
}

///////////////////////////////////////

export class PostBase {
  id?: string;					// uuid as Id
  lastUpdated?: number;	// unix timestamp of UTC in Timestamp in Milliseconds
  deleted?: boolean;			// soft deleted or not
}

export class Comment {
  postor: Person;
  when: Date;
  title?: MultiText;
  text: MultiText;
}

export class Tag {
  label: string;			// one of: greeting, quote, sermon, event, testimory
  eventId: string;
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
  name: MultiText;		// title of App
  subtitle: MultiText;
  mainSite: Site;
  sites: Site[];
	contactImage: Resource;
// Sections below:
  greeting: Section;
  activities: Section;
  todaySermon: Section;
  causes: Section;
  quote: Section;
  latest: Section;
  pastors: Section;
  popularSermons: Section;
  news: Section;
  ministries: Section;
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


export class Cause {
  image: string;
  title: MultiText;
  text: MultiText;
}

export class SliderItem {
  image: string;
  title: MultiText;
}

export class MenuItem {
  title: MultiText;
  route: string;
}


export class Blog extends PostBase {
  image: string;
  date: Date;
  title: MultiText;
  postBy: MultiText;
  postIn: MultiText;
  comments: Comment[];
  text: MultiText;
}

export class Story extends PostBase {
  belongs: Tag[];			// tag set
  image: Resource;
  title: MultiText;
  subtitle: MultiText;
  description: MultiText;
  host: Person;
  address: MultiText;
  start: Date;
  minutes: number;
  comments: Comment[];
}

export class Sermon extends PostBase {
  image: string;
  timestamp: number;
  title: MultiText;
  preacher: MultiText;
  categories: string[];
  comments?: Comment[];
	text: MultiText;
	link: string;
}


/////////////// Legacy ////////////////////////


export class Ministry {
  image: string;
  title: MultiText;
  text: MultiText;
}

export class Pastor {
  image: string;
  title: MultiText;
  text: MultiText;
}

// export class Quote {
//   image: string;
//   source: MultiText;
//   text: MultiText;
// }

// export class Service {
//   image: string;
//   title: MultiText;
// }

