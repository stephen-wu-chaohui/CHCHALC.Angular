import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

export class MultiText {
  english: string;
  chinese?: string;
}

export class MenuItem {
  title: MultiText;
  route: string;
}


export type PageName = string;
export type EntityId = string;
export type PageId = string;
export type ImageURL = string;
export type LinkURL = string;
export type Path = string;
export type PriorityEnum = 'emergancy'|'high'|'low'|'isolated';

export class CollectionRef {
  location: 'root'|'parent'|'this';
  collectionName: string;
}

export class Link {
  type: 'setPage'|'link';
  text?: MultiText;
  url: LinkURL;
}

export const WEntityRoot = 'EntityRoot/church';

export class WEntity {
  id: EntityId;  // one of church, ministry, cellgroup, person, storage or uuid
  lastUpdated?: number;	// unix timestamp of UTC in Timestamp in Milliseconds
  deleted?: boolean;			// soft deleted or not
  start: number;
  title: MultiText;

  path?: Path;
  name?: MultiText;
  subTitle?: MultiText;
  text?: MultiText;
  description?: MultiText;
  reference?: MultiText;
  image?: ImageURL;
  backgroundImage?: ImageURL;
  priority?: PriorityEnum;
  links?: Link[];
  password?: string;
  uiTemplateId?: string[];

  constructor(collectionPath: string) {
    this.id = uuidv4();
    this.path = `${collectionPath}/${this.id}`;
    this.lastUpdated = new Date().getTime();
    this.start = new Date().getTime();
    this.image = 'assets/images/cross_1.png';
    this.title = { english: '[title]', chinese: '[标题]'};
    this.subTitle = { english: '[subTitle]', chinese: '[子标题]'};
  }
}

export type WPerson = WEntity;
export type PersonId = EntityId;

export class WAssembly extends WEntity {
  address: MultiText;
  coordinate: { lantitue: number, longitude: number; };
  host: PersonId;
  phoneNumbers: string[];
  email?: string;
}

export type WMinistry = WAssembly;
export type WCellGroup = WAssembly;
export type WStory = WAssembly;
export type WChurch = WAssembly;
export type HomeBarStyle = 'none'|'normal';

export class WPage {    // template of webpages used to display a document
  id: PageId;  // 'church', 'ministry', 'cellgroup', ''
  title?: MultiText;
  homeBar?: HomeBarStyle;
  icon?: ImageURL;
  sections: WSection[];
}

export type ContentStyle = 'frontpage'|'greeting'|'page'|'sermon'|'quote'|'item'|'person'|'icon';
export type ImageStyle = 'full'|'margin'|'original';
/*
  frontpage: full-width, full-height, use background-image/color, image, title, sub-title, description, link  --- top-bottom
  greeting: full-width, use background-image/color, image, title, sub-title, description, link  --- left-right
  quote: full-width, use background-image/color, image, title, sub-title, description, link  --- top-bottom
  item: large/medium/icon, use name, image, title, sub-title, description, link
*/

export type Action = 'Link'|'Route'|'none'|'';
export type DirectionEnum = 'asc'|'desc';
export type SliceEnum = 'last'|'first'|'';

export class EntityDisplayOptions {
  contentStyle: ContentStyle;
  imageStyle?: ImageStyle;
}

export class EntitySource {
  collection: string;      // Read/write from here
  priorities: PriorityEnum[];      // filter items in these priorities
  directionStr?: DirectionEnum;
  slice?: SliceEnum;
  maxinum?: number;
  editable?: boolean;
}

export class WSection {
  label?: string;
  icon?: ImageURL;
  title?: MultiText;
  subtitle?: MultiText;
  description?: MultiText;
  backgroundImage?: ImageURL;
  lightText?: boolean;
  entitySource: EntitySource;
  entityDisplayOptions: EntityDisplayOptions;
  action?: Action;    // When 'Route', always jump to main page
  entityTemplate?: string[];
}

export class ServiceResponse {
  status: ''|'OK'|string;  // '' for no response, 'OK' for OK, others for errors
  reason: any;
}


export interface IEntityService {
  readonly root: WAssembly;
  collectionPathOf(path: Path, collectionName: string): Path;
  getEntity<TEntity extends WEntity>(collectionPath: Path, id: EntityId): Promise<TEntity>;
  setEntity<TEntity extends WEntity>(collectionPath: Path, newValue: TEntity): Promise<ServiceResponse>;
  updateEntity<TEntity extends WEntity>(collectionPath: Path, newChanges: TEntity): Promise<ServiceResponse>;
  getObservable<TEntity extends WEntity>(hostPath: Path, source: EntitySource, includingDeleted: boolean): Observable<TEntity[]>;
  uploadImage(folder: Path, file: File): Promise<ImageURL>;
}
