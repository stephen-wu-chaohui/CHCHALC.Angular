import { Injectable } from '@angular/core';
import { WEntity, ServiceResponse, EntitySource, EntityId, IEntityService, Path, ImageURL, CollectionRef, WAssembly } from './types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstrctEntityService implements IEntityService {
  abstract root: WAssembly;
  abstract collectionPathOf(path: Path, collectionName: string): Path;
  abstract getEntity<T extends WEntity>(collectionPath: Path, id: EntityId): Promise<T>;
  abstract setEntity(collectionPath: Path, newValue: WEntity): Promise<ServiceResponse>;
  abstract updateEntity(collectionPath: Path, newChanges: WEntity): Promise<ServiceResponse>;
  abstract getObservable(hostPath: Path, source: EntitySource): Observable<WEntity[]>;
  abstract uploadImage(folder: Path, file: File): Promise<ImageURL>;
}
