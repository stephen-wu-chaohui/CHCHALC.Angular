import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ContextService } from 'src/app/services/context.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { WEntity } from 'src/app/services/types';
import { AbstrctEntityService } from 'src/app/services/entity.service';

@Component({
  selector: 'app-set-password-dialog',
  templateUrl: './set-password-dialog.component.html',
  styleUrls: ['./set-password-dialog.component.css']
})
export class SetPasswordDialogComponent {
  @Input() title: string;
  @Input() collectionPath: string;
  @Input() entity: WEntity;
  errorMessage = '';

  formChanges = new FormGroup({
    password: new FormControl(''),
  });

  constructor(private cs: ContextService, private es: AbstrctEntityService, public activeModal: NgbActiveModal) {
  }

  onClick() {
    const v = this.formChanges.value;
    this.entity.password = v.password;
    this.es.updateEntity(this.collectionPath, this.entity);
    this.activeModal.close('OK');
  }

  onChange() {
    this.errorMessage = '';
  }
}
