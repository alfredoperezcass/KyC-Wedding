import { Component, OnInit, inject } from '@angular/core'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'

import { combineLatest, filter } from 'rxjs'

import guestList from '@assets/guest-list.json'
import { GlobalState } from '@core/global.state'
import { environment } from '../../../../environment/environment';
import { Guest } from '@core/guest.interfaces'
import { GuestService } from '@core/guest.service'

@Component({
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
	private readonly router = inject(Router)
	private readonly activatedRoute = inject(ActivatedRoute)
	private readonly globalState = inject(GlobalState)
  private readonly guestService = inject(GuestService)
  guest: Guest;

	readonly ornaments = ['top-left', 'top-right', 'bottom-left', 'bottom-right']

	readonly light$ = combineLatest([
		this.globalState.guest,
		this.router.events.pipe(filter((event) => event instanceof NavigationEnd)),
	])

	currentPath = this.router.url
	toggle = false

	get isLightStyle(): boolean {
		const { guestId } = this.globalState.guest.value

		return (
			this.currentPath === `/${guestId}` || this.currentPath === `/${guestId}/jenny-y-jorge`
		)
	}

	ngOnInit(): void {

		this.router.events
			.pipe(filter((event) => event instanceof NavigationEnd))
			.subscribe(({ urlAfterRedirects }: NavigationEnd) => {
				this.currentPath = urlAfterRedirects
				this.toggle = false
			})

		this.activatedRoute.params.subscribe(({ guest: guestId }) => {
      this.guestService.getGuest(guestId).subscribe((_guest) => {
        if (_guest) {
          localStorage.setItem('guest', JSON.stringify(_guest))
          this.globalState.guest.next(_guest)
        } else {
          localStorage.clear()
          this.globalState.guest.next(null)
          this.router.navigate(['/sin-invitacion'])
        }
      })
		})
	}
	onToggle(): void {
		this.toggle = !this.toggle
	}
}
