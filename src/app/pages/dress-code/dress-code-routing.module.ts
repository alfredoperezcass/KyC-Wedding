import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { DressCodeComponent } from './dress-code.component'

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: '',
				component: DressCodeComponent,
			},
		]),
	],
	exports: [RouterModule],
})
export class DressCodeRoutingModule {}
