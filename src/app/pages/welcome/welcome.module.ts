import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { TranslateModule } from '@ngx-translate/core'

import { Countdown } from '@components/countdown'

import { WelcomeComponent } from './welcome.component'
import { WelcomeRoutingModule } from './welcome-routing.module'

@NgModule({
	declarations: [WelcomeComponent],
	imports: [CommonModule, WelcomeRoutingModule, TranslateModule, Countdown],
})
export class WelcomeModule {}
