import {
  Injectable,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
  EmbeddedViewRef,
  ComponentRef,
  ElementRef
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DOMService {

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector,
  ) {}

  appendComponentToBody(el: ElementRef, component: any) {
    // create a component reference
    const componentRef = this.componentFactoryResolver.resolveComponentFactory(component)
      .create(this.injector);

    // attach component to the appRef so that so that it will be dirty checked.
    this.applicationRef.attachView(componentRef.hostView);

    // get DOM element from component
    const domElem = (componentRef.hostView as EmbeddedViewRef < any > )
      .rootNodes[0] as HTMLElement;

    el.nativeElement.appendChild(domElem);
    return componentRef;
  }

  removeComponentFromBody(componentRef: ComponentRef < any > ) {
    this.applicationRef.detachView(componentRef.hostView);
    componentRef.destroy();
  }
}