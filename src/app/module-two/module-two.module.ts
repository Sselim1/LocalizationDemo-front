import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { ModuleTwoRoutingModule } from './module-two-routing.module';

export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/module2/', '.json');
}

@NgModule({
  declarations: [
    ComponentTwoComponent
  ],
  imports: [
    CommonModule,
    ModuleTwoRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    })
  ]
})
export class ModuleTWoModule { }
