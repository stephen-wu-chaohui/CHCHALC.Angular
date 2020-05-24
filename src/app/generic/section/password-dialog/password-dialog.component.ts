import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { ContextService } from 'src/app/services/context.service';

@Component({
  selector: 'app-password-dialog',
  templateUrl: './password-dialog.component.html',
  styleUrls: ['./password-dialog.component.css']
})
export class PasswordDialogComponent {
  @Input() title: string;
  errorMessage = '';

  formChanges = new FormGroup({
    password: new FormControl(''),
  });

  constructor(private cs: ContextService, public activeModal: NgbActiveModal) {
  }

  onClick() {
    const v = this.formChanges.value;
    if (this.cs.checkPassword(v.password)) {
      this.errorMessage = '';
      this.activeModal.close('OK');
    } else {
      this.errorMessage = 'Password is mismatched';
      setTimeout(() => this.errorMessage = '', 2000);
    }
  }

  onChange() {
    this.errorMessage = '';
  }
}
