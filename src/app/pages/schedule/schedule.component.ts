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
			label: 'SCHEDULE.RELIGIOUS_CEREMONY',
			time: '1:00 PM',
			delay: '',
			maps: {
				hasParkings: false,
				isChurch: true,
				buildingName:
					'Iglesia De San Juan Bautista, San Juan Solis, Hidalgo',
				image: 'assets/images/iglesiaSanJuan.jpg',
			},
		},
		{
			label: 'SCHEDULE.RECEPTION',
			time: '4:00 PM',
			delay: 'animate__delay-1s',
			maps: {
				hasParkings: true,
				isChurch: false,
				buildingName:
					'Salón VIP, Hacienda Santa Cecilia, Carboneras, Pachuca, Hidalgo',
				image: 'assets/images/haciendaSantaCecilia.jpeg',
			},
		},
		{
			label: 'SCHEDULE.BRIDE_AND_GROOM_ENTRANCE',
			time: '5:00 PM',
			delay: 'animate__delay-3s',
		},
		{
			label: 'SCHEDULE.FEAST',
			time: '5:10 PM',
			delay: 'animate__delay-3s',
		},
		{
			label: 'SCHEDULE.VALS',
			time: '8:00 PM',
			delay: 'animate__delay-4s',
		},
		{
			label: 'SCHEDULE.PARTY_STARTS',
			time: '10:00 PM - 12:00 AM',
			delay: 'animate__delay-5s',
		},
		{
			label: 'SCHEDULE.BANDA',
			time: '12:00 AM - 2:00 AM',
			delay: 'animate__delay-5s',
		},
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
