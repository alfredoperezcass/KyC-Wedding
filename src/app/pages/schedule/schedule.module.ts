import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatDialogModule } from '@angular/material/dialog'
import { MatRippleModule } from '@angular/material/core'

import { TranslateModule } from '@ngx-translate/core'

import { ScheduleComponent } from './schedule.component'
import { ScheduleRoutingModule } from './schedule-routing.module'
import { MapsDialog } from './components/maps-dialog'
import { ParkingMapsDialog } from './components/parking-maps-dialog'

@NgModule({
	declarations: [ScheduleComponent],
	imports: [
		CommonModule,
		ScheduleRoutingModule,
		MatDialogModule,
		MatRippleModule,
		TranslateModule,
		MapsDialog,
		ParkingMapsDialog,
	],
})
export class ScheduleModule {}
