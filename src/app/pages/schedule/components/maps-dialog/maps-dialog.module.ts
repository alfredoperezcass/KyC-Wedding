import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatDialogModule } from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button'

import { MapsDialogComponent } from './maps-dialog.component'
import { TranslateModule } from '@ngx-translate/core'

@NgModule({
	declarations: [MapsDialogComponent],
	imports: [CommonModule, MatDialogModule, MatButtonModule, TranslateModule],
})
export class MapsDialogModule {}
