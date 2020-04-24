import { Directive, Input, ElementRef, HostListener } from '@angular/core';
import { Story } from 'src/app/data/api-data';

@Directive({
  selector: '[appStoryEditor]'
})
export class StoryEditorDirective {
	@Input('appStoryEditor') item: Story;
	@Input() defaultColor = 'yellow';

  constructor(private el: ElementRef) {
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.defaultColor || 'red');
  }

	@HostListener('click') onClick() {
		this.edit();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

	private edit() {
		alert(JSON.stringify(this.item) );
	}

	private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
