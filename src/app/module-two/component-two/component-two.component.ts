import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from '../../service';
import { Person } from '../../person';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrl: './component-two.component.css'
})

export class ComponentTwoComponent implements OnInit {
  title: string = 'Mock Data Table From ts';
  constructor(private translate: TranslateService,private dataService: DataService) {
    translate.use('en');
    
  }
  data:Person[]=[];
  ngOnInit() {
    this.data=this.dataService.loadData();
  }
  switchLanguage(language: string) {
    this.translate.use(language);
    this.translateTitle();
  }
  translateTitle() {
    this.translate.get('Mock Data Table from ts').subscribe((translatedTitle: string) => {
      this.title = translatedTitle;
    });
  }

}
