import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatDialogModule } from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button'

import { TranslateModule } from '@ngx-translate/core'

import { ParkingMapsDialogComponent } from './parking-maps-dialog.component'

@NgModule({
	declarations: [ParkingMapsDialogComponent],
	imports: [CommonModule, MatDialogModule, MatButtonModule, TranslateModule],
})
export class ParkingMapsDialogModule {}
