import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { MatRippleModule } from '@angular/material/core'

import { Navigation } from '@components/navigation'
import { Ornament } from '@components/ornament'

import { LayoutComponent } from './layout.component'

@NgModule({
	declarations: [LayoutComponent],
	imports: [CommonModule, RouterModule, MatRippleModule, Navigation, Ornament],
})
export class LayoutModule {}
