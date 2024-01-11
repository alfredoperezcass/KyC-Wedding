import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

import { map, timer } from 'rxjs'

import { TranslateModule } from '@ngx-translate/core'

@Component({
	selector: 'countdown',
	template: `
		<strong>{{ 'COUNTDOWN.LABEL' | translate }}</strong>
		<div class="container" *ngIf="countDown$ | async as countDown">
			<div>
				<span style="color: rgb(0 0 0 / 80%)">{{ countDown.days }}</span>
				<small>{{ 'COUNTDOWN.DAYS' | translate }}</small>
			</div>
			<div>
				<span style="color: rgb(0 0 0 / 80%)">{{ countDown.hours }}</span>
				<small>{{ 'COUNTDOWN.HOURS' | translate }}</small>
			</div>
			<div>
				<span style="color: rgb(0 0 0 / 80%)">{{ countDown.minutes }}</span>
				<small>{{ 'COUNTDOWN.MINUTES' | translate }}</small>
			</div>
			<div>
				<span style="color: rgb(0 0 0 / 80%)">{{ countDown.seconds }}</span>
				<small>{{ 'COUNTDOWN.SECONDS' | translate }}</small>
			</div>
		</div>
	`,
	styleUrls: ['./countdown.component.scss'],
	standalone: true,
	imports: [CommonModule, TranslateModule],
})
export class CountdownComponent {
	readonly countDown$ = timer(0, 1000).pipe(
		map(() => {
			const finaleDate = new Date('2024-02-24T17:00:00.000Z').getTime()
			const currentDate = new Date().getTime()
			const distance = finaleDate - currentDate
			const days = Math.floor(distance / (1000 * 60 * 60 * 24))
			const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
			const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
			const seconds = Math.floor((distance % (1000 * 60)) / 1000)

			return { days, hours, minutes, seconds }
		})
	)
}
