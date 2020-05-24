import { Directive, Input, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';
import { PageService } from 'src/app/services/page.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PasswordDialogComponent } from './password-dialog/password-dialog.component';

@Directive({
  selector: '[appEdit]'
})
export class EditDirective {
  @Input() editMode: boolean;
  @Output() editModeChanged = new EventEmitter();
  touchTimeout: any;
  closeResult: any;

  constructor(
    private imgEl: ElementRef,
    private ps: PageService,
    private modalService: NgbModal
  ) {
    console.log('EditDirective.constructor');
  }

  @HostListener('mousedown') touchstart() {
    console.log('mousedown');
    this.touchTimeout = setTimeout(() => {
      this.changeEditMode();
    }, 1000);
  }

  changeEditMode() {
    if (this.editMode) {
      this.editModeChanged.emit(false);
    } else {
      this.openPasswordDialog();
    }
  }

  @HostListener('mouseup') onMouseEnter() {
    console.log('mouseup');
    clearTimeout(this.touchTimeout);
  }

  openPasswordDialog() {
    const modalRef = this.modalService.open(PasswordDialogComponent, { size: 'sm', centered: true });
    modalRef.componentInstance.title = 'Enter password to start editing the section';
    modalRef.result.then(() => this.editModeChanged.emit(true));
  }
}
