import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-box-card',
  templateUrl: './box-card.component.html',
  styleUrls: ['./box-card.component.scss']
})
export class BoxCardComponent implements OnInit {

  @Input() icon : string = '';
  @Input() topic : string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
