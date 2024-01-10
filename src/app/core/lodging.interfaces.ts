export enum HotelId {
	HoteldelValleInn = 1,
	HotelMision = 2,
	HotelBlanco = 3,
	HotelFiestaInn = 4,
	HotelFiestaMexicana = 5
}

export const enum HotelName {
	HoteldelValleInn = 'Hotel del Valle Inn',
	HotelMision = 'Hotel Misión',
	HotelBlanco = 'Hotel Blanco',
	HotelFiestaInn = 'Fiesta Inn Pachuca Gran Patio',
	HotelFiestaMexicana = 'Hotel Fiesta Mexicana'
}

export interface Hotel {
	hotelId: HotelId
	name: string
	image: string
	tel: string
	delay: string
	website: string
}

export type Hotels = Hotel[]
