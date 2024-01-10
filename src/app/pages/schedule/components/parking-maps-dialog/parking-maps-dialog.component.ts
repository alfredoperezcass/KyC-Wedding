import { Component, inject } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
	templateUrl: './parking-maps-dialog.component.html',
	styleUrls: ['./parking-maps-dialog.component.scss'],
})
export class ParkingMapsDialogComponent {
	readonly data: boolean = inject(MAT_DIALOG_DATA)

	readonly headlining = this.data ? 'Google Maps' : 'Waze'
}
