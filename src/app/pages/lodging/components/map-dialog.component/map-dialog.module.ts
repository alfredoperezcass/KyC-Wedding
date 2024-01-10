import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatDialogModule } from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button'

import { TranslateModule } from '@ngx-translate/core'

import { MapDialogComponent } from './map-dialog.component'

@NgModule({
	declarations: [MapDialogComponent],
	imports: [CommonModule, MatDialogModule, MatButtonModule, TranslateModule],
})
export class MapDialogModule {}
