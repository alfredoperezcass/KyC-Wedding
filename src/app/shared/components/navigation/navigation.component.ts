import { CommonModule } from '@angular/common'
import { Component, HostBinding, OnInit, inject } from '@angular/core'
import { NavigationEnd, Router, RouterModule } from '@angular/router'

import { filter, map } from 'rxjs'

import { TranslateModule, TranslateService } from '@ngx-translate/core'

import { GlobalState } from '@core/global.state'

@Component({
	selector: 'navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss'],
	standalone: true,
	imports: [CommonModule, RouterModule, TranslateModule],
})
export class NavigationComponent implements OnInit {
	private readonly router = inject(Router)
	private readonly globalState = inject(GlobalState)
	private readonly translateService = inject(TranslateService)
	private readonly navigationEnd$ = this.router.events.pipe(
		filter((event) => event instanceof NavigationEnd)
	)

	isMenuActive: boolean = false
	url: string = this.router.url

	readonly navItems$ = this.globalState.guest$.pipe(
		map(({ guestId }) => [
			{
				label: 'MENU.WELCOME',
				path: `/${guestId}`,
				delay: '',
			},
			{
				label: 'MENU.PASSES',
				path: `/${guestId}/pases`,
				delay: 'animate__delay-1s',
			},
			{
				label: 'MENU.SCHEDULE',
				path: `/${guestId}/cronograma`,
				delay: 'animate__delay-2s',
			},
			{
				label: 'MENU.LODGING',
				path: `/${guestId}/hospedaje`,
				delay: 'animate__delay-3s',
			},
			{
				label: 'MENU.DRESS_CODE',
				path: `/${guestId}/codigo-de-vestimenta`,
				delay: 'animate__delay-6s',
			}
		])
	)

	@HostBinding('class.active') get isMenuActiveClass() {
		return this.isMenuActive
	}

	ngOnInit(): void {
		this.navigationEnd$.subscribe(({ urlAfterRedirects }: NavigationEnd) => {
			this.isMenuActive = false
			this.url = urlAfterRedirects
		})
	}

	onToggleMenu(): void {
		this.isMenuActive = !this.isMenuActive
	}

	onNavigate(path: string): void {
		this.isMenuActive = false

		this.router.navigate([path])
	}

	changeLang(): void {
		this.translateService.use(this.translateService.currentLang === 'es' ? 'en' : 'es')
	}
}
