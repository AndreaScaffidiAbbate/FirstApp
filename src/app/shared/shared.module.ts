import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { TableTristeComponent } from './table-triste/table-triste.component';
import { CardcustomComponent } from './cardcustom/cardcustom.component';



@NgModule({
    declarations: [
        CardComponent,
        TableTristeComponent,
        CardcustomComponent
    ],
  exports: [
    CardComponent,
    TableTristeComponent,
    CardcustomComponent
  ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
