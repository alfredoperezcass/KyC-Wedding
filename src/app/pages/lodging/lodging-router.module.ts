import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { LodgingComponent } from './lodging.component'

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: '',
				component: LodgingComponent,
			},
		]),
	],
	exports: [RouterModule],
})
export class LodgingRouterModule {}
