import { MultiText } from 'src/app/data/api-data';
import { Observable } from 'rxjs';

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
  id: EntityId;  // one of church, ministry, cellgroup, person, storage
  path: Path;
  name: MultiText;
  title: MultiText;
  subTitle?: MultiText;
  text?: MultiText;
  description?: MultiText;
  reference?: MultiText;
  image?: ImageURL;
  priority?: PriorityEnum;
  link?: LinkURL;
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

export class WPage {    // template of webpages used to display a document
  id: PageId;  // 'church', 'ministry', 'cellgroup', ''
  title?: MultiText;
  icon?: ImageURL;
  sections: WSection[];
}

export type SizeEnum = 'slide'|'row'|'large'|'medium'|'small'|'icon';    // for collection view
export type Position = 'middle'|'left-right'|'top-bottom';
export type ImageStyle = 'full'|'page'|'margin'|'icon';
export type ContentStyle = 'image-only'|'image-title'|'text-only'|'all'|'quote';
export type Action = 'Link'|'Route'|'none'|'';
export type DirectionEnum = 'asc'|'desc';
export type SliceEnum = 'last'|'first'|'';

export class EntityDisplayOptions {
  size: SizeEnum;
  position: Position;
  imageStyle: ImageStyle;
  contentStyle: ContentStyle;
}

export class EntitySource {
  collection: string;      // Read/write from here
  priorities: PriorityEnum[];      // filter items in these priorities
  directionStr?: DirectionEnum;
  slice?: SliceEnum;
  maxinum?: number;
}

export class WSection {
  icon?: ImageURL;
  title?: MultiText;
  subtitle?: MultiText;
  description?: MultiText;
  backgroudImage?: ImageURL;
  lightText?: boolean;
  entitySource: EntitySource;
  entityDisplayOptions: EntityDisplayOptions;
  action?: Action;    // When 'Route', always jump to main page
}

export class EntityPagesBinding {
  entity: WEntity;
  pages: WPage[];
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
