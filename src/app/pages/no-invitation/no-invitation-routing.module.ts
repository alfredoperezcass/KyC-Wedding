import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { NoInvitationComponent } from './no-invitation.component'

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: '',
				component: NoInvitationComponent,
			},
		]),
	],
	exports: [RouterModule],
})
export class NoInvitationRoutingModule {}
