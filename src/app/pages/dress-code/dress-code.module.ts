import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TranslateModule } from '@ngx-translate/core'

import { DressCodeComponent } from './dress-code.component'
import { DressCodeRoutingModule } from './dress-code-routing.module'

@NgModule({
	declarations: [DressCodeComponent],
	imports: [CommonModule, DressCodeRoutingModule, TranslateModule],
})
export class DressCodeModule {}
