import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './pages/app/app.component';
//import { HomePageComponent } from '@app/pages/home-page/home-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { GptPageComponent } from './pages/gpt-page/gpt-page.component';
import { ChatBoxComponent } from './components/chat-box/chat-box.component';
import { ChatBoxMessageComponent } from './components/chat-box-message/chat-box-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    AboutUsPageComponent,
    GptPageComponent,
    ChatBoxComponent,
    ChatBoxMessageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
