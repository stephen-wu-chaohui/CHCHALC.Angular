import { Injectable } from '@angular/core';
import { WEntity, ServiceResponse, EntitySource, EntityId, IEntityService, Path, ImageURL, WAssembly } from './types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstrctEntityService implements IEntityService {
  abstract root: WAssembly;
  abstract collectionPathOf(path: Path, collectionName: string): Path;
  abstract getEntity<TEntity extends WEntity>(collectionPath: Path, id: EntityId): Promise<TEntity>;
  abstract setEntity<TEntity extends WEntity>(collectionPath: Path, newValue: TEntity): Promise<ServiceResponse>;
  abstract updateEntity<TEntity extends WEntity>(collectionPath: Path, newChanges: TEntity): Promise<ServiceResponse>;
  abstract getObservable<TEntity extends WEntity>(hostPath: Path, source: EntitySource): Observable<TEntity[]>;
  abstract uploadImage(folder: Path, file: File): Promise<ImageURL>;
}
