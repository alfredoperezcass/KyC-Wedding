import { Component, inject } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'

import { ScheduleList } from '@core/guest.interfaces'
import { MapsDialogComponent } from './components/maps-dialog/maps-dialog.component'
import { ParkingMapsDialogComponent } from './components/parking-maps-dialog/parking-maps-dialog.component'

@Component({
	templateUrl: './schedule.component.html',
	styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent {
	private readonly dialog = inject(MatDialog)

	readonly scheduleList: ScheduleList = [
		{
			label: 'SCHEDULE.BRIDE_AND_GROOM_ENTRANCE',
			time: '5:00 PM',
			delay: 'animate__delay-1s',
			maps: {
				hasParkings: true,
				isChurch: false,
				buildingName:
					'Manga, avenida miramar club nautico Marina - Cartagena de Indias',
				image: 'assets/images/mabare_1.jpg',
			},
		},
		{
			label: 'SCHEDULE.RECEPTION',
			time: '6:00 PM',
			delay: 'animate__delay-3s',
		},
		{
			label: 'SCHEDULE.VALS',
			time: '6:30 PM',
			delay: 'animate__delay-3s',
		},
		{
			label: 'SCHEDULE.FEAST',
			time: '7:30 PM',
			delay: 'animate__delay-4s',
		}
	]

	onOpenDialogMap(isChurch: boolean, isGoogle: boolean): void {
		const data = { isChurch, isGoogle }

		this.dialog.open(MapsDialogComponent, {
			autoFocus: false,
			data,
			maxWidth: 'calc(100vw - 2rem)',
		})
	}

	onOpenParkingMapsDialog(data: boolean): void {
		this.dialog.open(ParkingMapsDialogComponent, {
			autoFocus: false,
			maxWidth: 'calc(100vw - 2rem)',
			data,
		})
	}
}
