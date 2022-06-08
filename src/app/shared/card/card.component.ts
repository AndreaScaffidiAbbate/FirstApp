import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() title : string = 'Title placeholder';
  @Input() description : string = 'Description placeholder';
  @Input() textButton : string = 'Button placeholder';
  @Input() src : string | undefined;
  @Input() btNclass : string = 'primary';


  constructor() {
  }

  ngOnInit(): void {
  }

}
