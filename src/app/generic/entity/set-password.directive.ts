import { Directive, HostListener, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SetPasswordDialogComponent } from './set-password-dialog/set-password-dialog.component';
import { WEntity } from 'src/app/services/types';

@Directive({
  selector: '[appSetPassword]'
})
export class SetPasswordDirective {
  @Input() editMode: boolean;
  @Input() entity: WEntity;
  @Input() collectionPath: string;

  touchTimeout: any;

  constructor(private modalService: NgbModal) {
      console.log('SetPasswordDirective.constructor');
    }

    @HostListener('mousedown') touchstart() {
      if (!this.editMode) {
        return;
      }
      this.touchTimeout = setTimeout(() => {
        this.setPassword();
      }, 1000);
    }

    @HostListener('mouseup') onMouseEnter() {
      console.log('mouseup');
      if (this.touchTimeout) {
        clearTimeout(this.touchTimeout);
        this.touchTimeout = null;
      }
    }

    setPassword() {
      const modalRef = this.modalService.open(SetPasswordDialogComponent, { size: 'sm', centered: true });
      modalRef.componentInstance.title = 'Set password to this entity';
      modalRef.componentInstance.collectionPath = this.collectionPath;
      modalRef.componentInstance.entity = this.entity;
      modalRef.result.then();
    }
}
