import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  closingClass: any = '';
  close: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  closeNav() {
    this.close = !this.close;
  }

}

