import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Saduser} from "../../core/models/saduser";

@Component({
  selector: 'app-table-triste',
  templateUrl: './table-triste.component.html',
  styleUrls: ['./table-triste.component.scss']
})
export class TableTristeComponent implements OnInit {

  //DEFINIAMO QUALI VALORI ACCETTA IN ENTRATA IL COMPONENTE
  @Input() sadList : Saduser[] = [];
  @Input() titlesList : string[] = [];

  //DEFINIAMO I VALORE DA EMETTERE IN USCITA CHE SARà SEMPRE UN EVENT-EMITTER
  @Output() indexSender : EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }


  sendIndex(index : number) {
    this.indexSender.emit(index)
  }
}
