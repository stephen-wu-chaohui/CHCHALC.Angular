import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appEditable]'
})
export class EditableDirective {
	@Input('appEditable') item: object;
	@Input() defaultColor = 'yellow';

  constructor(private el: ElementRef) {
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.defaultColor || 'red');
  }

	@HostListener('click') onClick() {
		alert(JSON.stringify(this.item) );
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
