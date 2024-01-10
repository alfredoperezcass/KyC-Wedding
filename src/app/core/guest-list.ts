import { Guest } from './guest.interfaces'

interface GuestList {
	[key: string]: Guest
}

export const GUEST_LIST: GuestList = {
	Victor_Zempoalteca: {
		guestId: 'Victor_Zempoalteca',
		title: 'Hola Victor',
		message:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem architecto inventore odio. Exercitationem minus nesciunt enim unde beatae eos ducimus',
		passes: 'Pase (2 personas)',
		ourDreams: {
			message:
				'Ahora nuestros sueños se hacen realidad. A través de los buenos tiempos y los malos, sí, estaré allí cerca de ti. Encuentro difícil ver que estamos en el cielo',
			sub: 'Heaven, BA',
		},
	},
	oscar: {
		guestId: 'oscar',
		title: 'Hola Oscar',
		message:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem architecto inventore odio. Exercitationem minus nesciunt enim unde beatae eos ducimus',
		passes: 'Pase (2 personas)',
		ourDreams: {
			message:
				'Ahora nuestros sueños se hacen realidad. A través de los buenos tiempos y los malos, sí, estaré allí cerca de ti. Encuentro difícil ver que estamos en el cielo',
			sub: 'Heaven, BA',
		},
	},
	alex: {
		guestId: 'alex',
		title: 'Hola Oscar',
		message:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem architecto inventore odio. Exercitationem minus nesciunt enim unde beatae eos ducimus',
		passes: 'Pase (2 personas)',
		ourDreams: {
			message:
				'Ahora nuestros sueños se hacen realidad. A través de los buenos tiempos y los malos, sí, estaré allí cerca de ti. Encuentro difícil ver que estamos en el cielo',
			sub: 'Heaven, BA',
		},
	},
	'familia-aguilar-ortega': {
		guestId: 'familia-aguilar-ortega',
		title: 'Hola Familia Aguilar Ortega',
		message:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem architecto inventore odio. Exercitationem minus nesciunt enim unde beatae eos ducimus',
		passes: 'Pase (8 personas)',
		ourDreams: {
			message:
				'Ahora nuestros sueños se hacen realidad. A través de los buenos tiempos y los malos, sí, estaré allí cerca de ti. Encuentro difícil ver que estamos en el cielo',
			sub: 'Heaven, BA',
		},
	},
}
