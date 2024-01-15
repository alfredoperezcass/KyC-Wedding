import { Component, inject } from '@angular/core'
import { environment } from '../../../environment/environment';
import { GuestService } from '@core/guest.service';
import { Guest } from '@core/guest.interfaces';
import { GlobalState } from '@core/global.state';

@Component({
	templateUrl: './welcome.component.html',
	styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
	private readonly globalState = inject(GlobalState)
  private readonly guestService = inject(GuestService)

  guestData: Guest;
  guestId: any;
  personaText: string;
  confirmation: string;
  loading: string;

  readonly guest$ = this.globalState.guest$

  messageConfirm = {
    "Confirmado": "Gracias por confirmar, te esperamos para celebrar juntos nuestra fecha.",
    "Rechazado": "Lamentamos profundamente saber que no podrás acompañarnos en este momento tan significativo. Entendemos que la vida nos lleva por diferentes caminos y apreciamos sinceramente tus buenos deseos y pensamientos en esta etapa tan importante de nuestras vidas.",
    "not_sure": "Entendemos que la vida puede estar llena de compromisos y cambios, y respetamos tu tiempo y consideración al pensar en tu asistencia. Sabemos que las circunstancias pueden ser diversas, y queremos asegurarte que cualquier decisión que tomes será completamente comprendida y respetada."
  }

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
