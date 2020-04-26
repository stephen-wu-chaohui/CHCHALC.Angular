import { Directive, Input, ElementRef, HostListener } from '@angular/core';
import { Story } from 'src/app/data/api-data';
import { EditingService } from '../editing.service';
import { OneOfList } from 'src/app/data/data-client.service';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';

@Directive({
  selector: '[appStoryEditor]'
})
export class StoryEditorDirective {
  @Input('appStoryEditor') item: Story;
  @Input() listName: OneOfList = 'Stories';

  constructor(private el: ElementRef, private data: ChchalcDataService, private editingService: EditingService) {
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  @HostListener('click') onClick() {
    if (!this.listName) {
      console.error('listName is missed when using appStoryEditor directive');
      return;
    }
    if (!this.item) {
      console.error('appStoryEditor is missed when using appStoryEditor directive');
      return;
    }
    this.editingService.edit(this.listName, this.item);
  }

  private highlight(color: string) {
    if (this.data.adminMode) {
      this.el.nativeElement.style.backgroundColor = color;
    }
  }
}
