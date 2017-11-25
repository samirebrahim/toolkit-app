import { ToolkitService } from './toolkit.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolkit',
  templateUrl: './toolkit.component.html',
  styleUrls: ['./toolkit.component.scss']
})
export class ToolkitComponent implements OnInit {
   categories =[];
   term = '';
   allCategories=[];
  constructor(private toolkitService: ToolkitService) { }

  ngOnInit() {
    this.toolkitService.getCategories().subscribe(respone => {
      this.categories = respone['categories'];
      this.allCategories = this.categories;
    })
  }
  search(searchKey, e: any): void {
    this.categories = this.allCategories.filter((d) => {
    let foundNested=   d['links'].findIndex((l) => {
       return l[searchKey].toLowerCase().indexOf(e.toLowerCase()) > -1;
      })
       return (d[searchKey].toLowerCase().indexOf(e.toLowerCase()) > -1 || foundNested > -1 );
    })
  }
}
