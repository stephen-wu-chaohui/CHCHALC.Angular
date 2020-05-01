import { Directive, Input, ElementRef, HostListener } from '@angular/core';
import { OneOfList } from 'src/app/data/data-client.service';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';
import { DOMService } from './dom.service';
import { ItemEditorComponent } from './item-editor/item-editor.component';

@Directive({
  selector: '[appItemEditor]'
})
export class ItemEditorDirective {
  @Input() listName: OneOfList = 'Stories';

  constructor(
    private imgEl: ElementRef,
    private data: ChchalcDataService,
    private domService: DOMService
  ) {
		console.log('ItemEditorDirective.constructor');

	}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
		console.log('ItemEditorDirective.highlight');
    if (this.data.adminMode) {
      this.imgEl.nativeElement.style.filter = 'contrast(25%)';
    }
  }

  @HostListener('click') onClick() {
    if (!this.listName) {
      console.error('listName is missed when using ItemEditorDirective');
      return;
    }
    // if (!this.item) {
    //   console.error('appStoryEditor is missed when using appStoryEditor directive');
    //   return;
    // }
		console.log('ItemEditorDirective.onClick');
    const editor = this.domService.appendComponentToBody(this.imgEl, ItemEditorComponent);
		console.log('ItemEditorDirective.editor', editor);
  }
}
