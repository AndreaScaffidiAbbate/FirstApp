import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cardcustom',
  templateUrl: './cardcustom.component.html',
  styleUrls: ['./cardcustom.component.scss']
})
export class CardcustomComponent implements OnInit {

  @Input() title : string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
