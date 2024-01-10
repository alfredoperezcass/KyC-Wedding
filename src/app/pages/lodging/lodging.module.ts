import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatRippleModule } from '@angular/material/core'
import { MatDialogModule } from '@angular/material/dialog'

import { TranslateModule } from '@ngx-translate/core'

import { LodgingComponent } from './lodging.component'
import { LodgingRouterModule } from './lodging-router.module'
import { MapDialog } from './components/map-dialog.component'

@NgModule({
	declarations: [LodgingComponent],
	imports: [
		CommonModule,
		LodgingRouterModule,
		MatRippleModule,
		MatDialogModule,
		TranslateModule,
		MapDialog,
	],
})
export class LodgingModule {}
