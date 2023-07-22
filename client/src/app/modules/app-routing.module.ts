import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '@app/pages/home-page/home-page.component';
import { AboutUsPageComponent } from '@app/pages/about-us-page/about-us-page.component';
import { GptPageComponent } from '@app/pages/gpt-page/gpt-page.component';
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'aboutus', component: AboutUsPageComponent },
  { path: 'gpt', component: GptPageComponent },
  { path: '**', redirectTo: '/home' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
