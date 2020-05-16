import { MultiText } from 'src/app/data/api-data';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

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
  priority?: PriorityEnum;
  link?: LinkURL;
  videoURL?: LinkURL;
  jumpTo?: string;

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

export type SizeEnum = 'slide'|'intro'|'row'|'large'|'medium'|'small'|'tiny';    // for collection view, margin and padding for items
export type ImageStyle = 'full'|'page'|'margin'|'icon'|'original';               // margin, padding & shadows
export type TextPosition = 'middle'|'left-right'|'top-bottom';                   // only useful when SizeEnum = 'slide'|'row'
export type ContentStyle = 'image-only'|'image-title'|'text-only'|'all'|'quote'|'pastor';
export type ContrastStyle = 'light'|'';                                          // text is light

export type Action = 'Link'|'Route'|'none'|'';
export type DirectionEnum = 'asc'|'desc';
export type SliceEnum = 'last'|'first'|'';

export class EntityDisplayOptions {
  size: SizeEnum;
  position: TextPosition;
  imageStyle: ImageStyle;
  contentStyle: ContentStyle;
  contrastStyle?: ContrastStyle;
}

export class EntitySource {
  collection: string;      // Read/write from here
  priorities: PriorityEnum[];      // filter items in these priorities
  directionStr?: DirectionEnum;
  slice?: SliceEnum;
  maxinum?: number;
}

export class WSection {
  label?: string;
  icon?: ImageURL;
  title?: MultiText;
  subtitle?: MultiText;
  description?: MultiText;
  backgroudImage?: ImageURL;
  lightText?: boolean;
  entitySource: EntitySource;
  entityDisplayOptions: EntityDisplayOptions;
  action?: Action;    // When 'Route', always jump to main page
  entityTemplate?: WPage[];
}

export class ServiceResponse {
  status: ''|'OK'|string;  // '' for no response, 'OK' for OK, others for errors
  reason: any;
}


export interface IEntityService {
  readonly root: WEntity;
  collectionPathOf(path: Path, collectionName: string): Path;
  getEntity(collectionPath: Path, id: EntityId): Promise<WEntity>;
  setEntity(collectionPath: Path, newValue: WEntity): Promise<ServiceResponse>;
  updateEntity(collectionPath: Path, newChanges: WEntity): Promise<ServiceResponse>;
  getObservable(hostPath: Path, source: EntitySource): Observable<WEntity[]>;
  uploadImage(folder: Path, file: File): Promise<ImageURL>;
}
