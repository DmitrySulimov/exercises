import {   ComponentFactoryResolver,
			  Injectable,
			  Inject,
			  ReflectiveInjector } from '@angular/core';
import { ModalComponent } from './modal/modal.component'


@Injectable()
export class ModalServiceService {
	factoryResolver;
	rootViewContainer;

   constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
    this.factoryResolver = factoryResolver
  }
  setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef
  }
  addDynamicComponent(){
    const factory = this.factoryResolver
                        .resolveComponentFactory(ModalComponent)
    const component = factory
      .create(this.rootViewContainer.parentInjector)
    this.rootViewContainer.insert(component.hostView)
  }



}
