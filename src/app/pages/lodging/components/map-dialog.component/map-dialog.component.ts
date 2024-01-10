import { Component, inject } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'

import { HotelId, HotelName } from '@core/lodging.interfaces'

@Component({
	templateUrl: './map-dialog.component.html',
	styleUrls: ['./map-dialog.component.scss'],
})
export class MapDialogComponent {
	readonly data = inject<HotelId>(MAT_DIALOG_DATA)
	readonly hotelId = HotelId

	get headlining() {
		if (this.data === HotelId.HoteldelValleInn) {
			return HotelName.HoteldelValleInn
		}

		if (this.data === HotelId.HotelMision) {
			return HotelName.HotelMision
		}

		if (this.data === HotelId.HotelBlanco) {
			return HotelName.HotelBlanco
		}

		if (this.data === HotelId.HotelFiestaInn) {
			return HotelName.HotelFiestaInn
		}

		return HotelName.HotelFiestaMexicana
	}
}
