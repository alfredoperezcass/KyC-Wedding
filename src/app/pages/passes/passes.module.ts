import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { PassesComponent } from './passes.component'
import { PassesRoutingModule } from './passes-routing.module'
import { TranslateModule } from '@ngx-translate/core'

@NgModule({
	declarations: [PassesComponent],
	imports: [CommonModule, PassesRoutingModule, TranslateModule],
})
export class PassesModule {}
