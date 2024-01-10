import { Component, inject } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { HotelId, Hotels } from '@core/lodging.interfaces'
import { MapDialogComponent } from './components/map-dialog.component/map-dialog.component'

@Component({
	templateUrl: './lodging.component.html',
	styleUrls: ['./lodging.component.scss'],
})
export class LodgingComponent {
	private readonly dialog = inject(MatDialog)

	readonly hotels: Hotels = [
		{
			hotelId: HotelId.HoteldelValleInn,
			name: 'Hotel del Valle Inn',
			image: 'assets/images/hotels/hotel-del-valle-inn.jpg',
			tel: 'tel:+527712818575',
			website: 'http://hoteldelvalleinn.com/',
			delay: '',
		},
		{
			hotelId: HotelId.HotelMision,
			name: 'Hotel Misión',
			image: 'assets/images/hotels/hotel-mision.jpg',
			tel: 'tel:+527717172300',
			website: 'https://reservations.hotelesmision.com.mx/114226?adults=2&children=0&currency=MXN&datein=11/27/2023&domain=www.google.com.mx&gdp=hotelfinder&hotelID=114226&languageid=2&nights=1&rateplanID=5405244&roomtypeID=516648&subchan=GOOGLE_MX_desktop&utm_campaign=ds_&utm_content=HPA_114226_mapresults_1_MX_desktop_2023-11-27_default___organic&utm_medium=meta&utm_source=googleha#/accommodation/room',
			delay: 'animate__delay-1s',
		},
		{
			hotelId: HotelId.HotelBlanco,
			name: 'Hotel Blanco',
			image: 'assets/images/hotels/hotel-blanco.jpg',
			tel: 'tel:+527713695002',
			website: 'https://www.booking.com/searchresults.es.html?aid=2127612&label=metagha-link-MRMX-hotel-6259831_dev-desktop_los-1_bw-5_dow-Sunday_defdate-1_room-0_gstadt-2_rateid-public_aud-0_gacid-_mcid-10_ppa-0_clrid-0_ad-0_gstkid-0_checkin-20231126_ppt-Bd&utm_medium=mapresults&hca=m&no_rooms=1&show_room=625983103_265689466_2_34_0&utm_content=dev-desktop_los-1_bw-5_dow-Sunday_defdate-1_room-0_gstadt-2_rateid-public_aud-0_gacid-_mcid-10_ppa-0_clrid-0_ad-0_gstkid-0_checkin-20231126_ppt-Bd&utm_campaign=MX&edgtid=91_47Rm8Tdm6APMhTKnAzQ&utm_term=hotel-6259831&ext_price_total=906.53&efpc=dlsAqQa1OkE&utm_source=metagha&ts=1700498913&highlighted_hotels=6259831&checkin=2023-11-26&redirected=1&city=-1686538&hlrd=with_dates&group_adults=2&source=hotel&group_children=0&checkout=2023-11-27&keep_landing=1&sid=a014c51afca27f75f07f6d30b00a786b',
			delay: 'animate__delay-2s',
		},
		{
			hotelId: HotelId.HotelFiestaInn,
			name: 'Hotel Fiesta Inn',
			image: 'assets/images/hotels/fiesta-inn.jpg',
			tel: 'tel:+527717178540',
			website: 'https://www.fiestainn.com/hoteles/fiesta-inn-pachuca-gran-patio',
			delay: 'animate__delay-3s',
		},
		{
			hotelId: HotelId.HotelFiestaMexicana,
			name: 'Hotel Fiesta Mexicana',
			image: 'assets/images/hotels/fiesta-mexicana.jpg',
			tel: 'tel:+527713255294',
			website: 'http://www.hotelfiestamexicana.com.mx/',
			delay: 'animate__delay-4s',
		},
	]
	readonly ripple = 'rgb(0 0 0 / 8%)'

	onOpenDialog(hotelId: HotelId): void {
		const data = hotelId

		this.dialog.open(MapDialogComponent, {
			width: '100%',
			maxWidth: 'calc(100vw - 2rem)',
			autoFocus: false,
			data,
		})
	}
}
