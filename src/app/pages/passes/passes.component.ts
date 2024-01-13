import { Component, inject } from '@angular/core'

import { GlobalState } from '@core/global.state'

@Component({
	template: `
		<ng-container *ngIf="guest$ | async as guest">
			<div class="padding-head">
				<h1 class="cursive animate__animated animate__fadeInDown">{{ guest.title }}</h1>
				<strong class="animate__animated animate__fadeInUp animate__delay-1s">
					{{ 'PASSES.WE_MARRIED' | translate }}
				</strong>
				<p class="animate__animated animate__fadeInDown animate__delay-2s">
				{{ 'PASSES.MESSAGE_TEXT' | translate }}
				</p>
				<p class="animate__animated animate__fadeInDown animate__delay-2s">
				{{ 'PASSES.MESSAGE' | translate }}
				</p>
				<span class="animate__animated animate__fadeInUp animate__delay-3s">
					{{ guest.passes }}
				</span>
				<small class="animate__animated animate__fadeInDown animate__delay-4s">
					{{ 'PASSES.NO_KIDS' | translate }}
				</small>
				<div class="buttons-container">
					<button class="wedding-button">Confirmar Asistencia</button>
					<button class="wedding-button">Declinar</button>
					<button class="wedding-button">No estoy Seguro(a)</button>
				</div>
			</div>
		</ng-container>
	`,
	styleUrls: ['./passes.component.scss'],
})
export class PassesComponent {
	private readonly globalState = inject(GlobalState)

	readonly guest$ = this.globalState.guest$
}
