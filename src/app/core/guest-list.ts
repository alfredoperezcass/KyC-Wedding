import { Guest } from './guest.interfaces'

interface GuestList {
	[key: string]: Guest
}

export const GUEST_LIST: GuestList = {
	andrea_venera: {
		guestId: 'andrea_venera',
		title: 'Hola Andrea',
		message:
			'Con gran felicidad en nuestros corazones, les extendemos una invitación especial para celebrar el amor que nos une en el día de nuestra boda. Su presencia hará que este momento sea aún más memorable. Únanse a nosotros para compartir risas, alegrías y el inicio de esta nueva etapa.',
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
