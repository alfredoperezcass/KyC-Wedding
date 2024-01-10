import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { NoInvitationComponent } from './no-invitation.component'
import { NoInvitationRoutingModule } from './no-invitation-routing.module'

@NgModule({
	declarations: [NoInvitationComponent],
	imports: [CommonModule, NoInvitationRoutingModule],
})
export class NoInvitationModule {}
