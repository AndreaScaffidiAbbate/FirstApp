import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { TableTristeComponent } from './table-triste/table-triste.component';
import { CardcustomComponent } from './cardcustom/cardcustom.component';
import { BoxCardComponent } from './box-card/box-card.component';



@NgModule({
    declarations: [
        CardComponent,
        TableTristeComponent,
        CardcustomComponent,
        BoxCardComponent
    ],
    exports: [
        CardComponent,
        TableTristeComponent,
        CardcustomComponent,
        BoxCardComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
