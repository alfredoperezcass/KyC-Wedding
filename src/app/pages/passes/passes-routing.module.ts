import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { PassesComponent } from './passes.component'

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: '',
				component: PassesComponent,
			},
		]),
	],
	exports: [RouterModule],
})
export class PassesRoutingModule {}
