import { DOCUMENT } from '@angular/common'
import { Component, OnInit, inject } from '@angular/core'

import { TranslateService } from '@ngx-translate/core'

@Component({
	selector: 'app-root',
	template: `<router-outlet />`,
})
export class AppComponent implements OnInit {
	private readonly translateService = inject(TranslateService)
	private readonly document = inject(DOCUMENT)

	ngOnInit(): void {
		const browserLang = this.translateService.getBrowserLang()

		this.document.documentElement.lang = browserLang
		this.translateService.addLangs(['es', 'en'])
		this.translateService.setDefaultLang(browserLang)
		this.translateService.use(browserLang)

		window.screen.orientation.lock('portrait')
	}
}
