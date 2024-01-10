import { Injectable, inject } from '@angular/core'
import { CanActivate, Router } from '@angular/router'

import { map } from 'rxjs'

import { GlobalState } from './global.state'

@Injectable({
	providedIn: 'root',
})
export class GuestGuard implements CanActivate {
	private readonly router = inject(Router)
	private readonly globalState = inject(GlobalState)

	canActivate() {
		return this.globalState.guested$.pipe(
			map((guested) => guested || this.router.createUrlTree(['/sin-invitacion']))
		)
	}
}
