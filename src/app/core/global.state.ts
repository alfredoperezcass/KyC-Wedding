import { Injectable } from '@angular/core'

import { BehaviorSubject, map } from 'rxjs'

import { Guest } from './guest.interfaces'

@Injectable({
	providedIn: 'root',
})
export class GlobalState {
	private get storaged(): Guest {
		if (Boolean(localStorage.getItem('guest'))) {
			return JSON.parse(localStorage.getItem('guest'))
		}

		return null
	}

	readonly guest = new BehaviorSubject<Guest>(this.storaged)
	readonly guest$ = this.guest.asObservable()
	readonly guested$ = this.guest$.pipe(map(Boolean))
}
