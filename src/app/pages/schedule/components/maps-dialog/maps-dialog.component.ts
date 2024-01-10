import { Component, inject } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
	templateUrl: './maps-dialog.component.html',
	styleUrls: ['./maps-dialog.component.scss'],
})
export class MapsDialogComponent {
	readonly data: { isChurch: boolean; isGoogle: boolean } = inject(MAT_DIALOG_DATA)

	get headlining() {
		return this.data.isGoogle ? 'Google Maps' : 'Waze'
	}
}
