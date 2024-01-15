import { Component, inject } from '@angular/core'

import { GlobalState } from '@core/global.state'
import { environment } from '../../../environment/environment';
import { GuestService } from '@core/guest.service';
import { Guest } from '@core/guest.interfaces';

@Component({
	template: `
		<ng-container *ngIf="guestData">
			<div class="padding-head">
				<h1 class="cursive animate__animated animate__fadeInDown">{{ guestData.title }}</h1>
				<strong class="animate__animated animate__fadeInUp animate__delay-1s">
					{{ 'PASSES.WE_MARRIED' | translate }}
				</strong>

				<p class="animate__animated animate__fadeInDown animate__delay-2s">
				{{ 'PASSES.MESSAGE' | translate }}
				</p>
				<span class="animate__animated animate__fadeInUp animate__delay-3s">
        Pase ({{ guestData.passes }}) {{ personaText }}
				</span>
				<small class="animate__animated animate__fadeInDown animate__delay-4s">
					{{ 'PASSES.NO_KIDS' | translate }}
				</small>
				<div class="buttons-container" *ngIf="confirmation == '' || confirmation == 'not_sure'">
					<button class="wedding-button" (click)="confirmInvitation('Confirmado')">{{ loading === 'Confirmado' ? 'Cargando...' : 'Confirmar Asistencia' }}</button>
					<button class="wedding-button" (click)="confirmInvitation('Rechazado')">{{ loading === 'Rechazado' ? 'Cargando...' : 'Declinar' }}</button>
					<button class="wedding-button" (click)="confirmInvitation('No esta Seguro(a)')"  *ngIf="confirmation != 'not_sure'">{{ loading === 'No esta Seguro(a)' ? 'Cargando...' : 'No esta Seguro(a)' }}</button>
				</div>
        <div class="success-container" *ngIf="confirmation == 'Confirmado'">
          <p>Gracias por confirmar, te esperamos para celebrar juntos nuestra fecha.</p>
        </div>
        <div class="success-container" *ngIf="confirmation == 'Rechazado'">
          <p>Lamentamos profundamente saber que no podrás acompañarnos en este momento tan significativo. Entendemos que la vida nos lleva por diferentes caminos y apreciamos sinceramente tus buenos deseos y pensamientos en esta etapa tan importante de nuestras vidas.</p>
        </div>
        <div class="success-container" *ngIf="confirmation == 'not_sure'" >
          <p>Entendemos que la vida puede estar llena de compromisos y cambios, y respetamos tu tiempo y consideración al pensar en tu asistencia. Sabemos que las circunstancias pueden ser diversas, y queremos asegurarte que cualquier decisión que tomes será completamente comprendida y respetada.</p>
        </div>
			</div>
		</ng-container>
	`,
	styleUrls: ['./passes.component.scss'],
})
export class PassesComponent {
	private readonly globalState = inject(GlobalState)
  private readonly guestService = inject(GuestService)

  guestData: Guest;
  guestId: any;
  personaText: string;
  confirmation: string;
  loading: string;

  messageConfirm = {
    "Confirmado": "Gracias por confirmar, te esperamos para celebrar juntos nuestra fecha.",
    "Rechazado": "Lamentamos profundamente saber que no podrás acompañarnos en este momento tan significativo. Entendemos que la vida nos lleva por diferentes caminos y apreciamos sinceramente tus buenos deseos y pensamientos en esta etapa tan importante de nuestras vidas.",
    "not_sure": "Entendemos que la vida puede estar llena de compromisos y cambios, y respetamos tu tiempo y consideración al pensar en tu asistencia. Sabemos que las circunstancias pueden ser diversas, y queremos asegurarte que cualquier decisión que tomes será completamente comprendida y respetada."
  }

	readonly guest$ = this.globalState.guest$

  ngOnInit(): void {

    this.guest$.subscribe((guest) => {
      this.guestId = guest.guestId;
      this.guestService.getGuest(guest.guestId).subscribe((_guest) => {
        this.personaText = (Number(_guest?.passes) > 1) ? 'Personas' : 'persona';
        this.confirmation = (_guest?.confirmation === 'No esta Seguro(a)') ? 'not_sure': _guest?.confirmation;
        this.guestData = _guest;
      });
    });

  }

  async confirmInvitation(response:string) {
    this.loading = response;
    const apiUrl = `${environment.apiBackendPersonal}/updateConfirmation`;
    const data = {
      guestId: this.guestId,
      response: response,
    };

    try {
      await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(data => {
          if (!data.ok) {
            this.loading = null;
            throw new Error(`Error en la solicitud: ${data.status} - ${data.statusText}`);
          }
          this.guestService.getGuest(this.guestId).subscribe((_guest) => {
            this.guestId = _guest?.guestId;
            this.personaText = (Number(_guest?.passes) > 1) ? 'Personas' : 'persona';
            this.confirmation = (_guest?.confirmation === 'No esta Seguro(a)') ? 'not_sure': _guest?.confirmation;
          });
          this.loading = null;
        })
      .catch(error => {
        this.loading = null;
          console.error('Error en la solicitud:', error.message);
        });
    } catch (error) {
      this.loading = null;
      console.error('Error al realizar la solicitud:', error.message);
    }
  }
}
