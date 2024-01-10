import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { LayoutComponent } from '@components/layout/layout.component'
import { NoInvitationComponent } from '@pages/no-invitation/no-invitation.component'

const routes: Routes = [
	{
		path: 'sin-invitacion',
		component: NoInvitationComponent,
	},
	{
		path: ':guest',
		component: LayoutComponent,
		children: [
			{
				path: '',
				loadChildren: () => import('@pages/welcome').then((m) => m.WelcomePage),
			},
			{
				path: 'pases',
				loadChildren: () => import('@pages/passes').then((m) => m.PassesPage),
			},
			{
				path: 'cronograma',
				loadChildren: () => import('@pages/schedule').then((m) => m.SchedulePage),
			},
			{
				path: 'hospedaje',
				loadChildren: () => import('@pages/lodging').then((m) => m.LodgingPage),
			},
			{
				path: 'codigo-de-vestimenta',
				loadChildren: () => import('@pages/dress-code').then((m) => m.DressCodePage),
			},
		],
	},
	{
		path: '**',
		redirectTo: 'Juan_perez',
		pathMatch: 'full',
	},
]

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			scrollPositionRestoration: 'enabled',
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
