import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-set-password-dialog',
  templateUrl: './set-password-dialog.component.html',
  styleUrls: ['./set-password-dialog.component.css']
})
export class SetPasswordDialogComponent {
  @Input() title: string;

  formChanges = new FormGroup({
    password: new FormControl(''),
  });

  constructor(public activeModal: NgbActiveModal) {
  }

  onClick() {
    const v = this.formChanges.value;
    this.activeModal.close(v.password);
  }
}
