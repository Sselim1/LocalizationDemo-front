import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrl: './component-one.component.css'
})

export class ComponentOneComponent {

  constructor(private translate: TranslateService) {
    translate.use('es'); 
  }
  switchLanguage(language: string) {
    this.translate.use(language);
  }
  
}
