import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './pages/app/app.component';
import { ChatboxComponent } from './components/chatbox/chatbox.component';
import { ChatMessageComponent } from './components/chat-message/chat-message.component';
import { GptPageComponent } from './pages/gpt-page/gpt-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    ChatboxComponent,
    ChatMessageComponent,
    GptPageComponent,
    HomePageComponent,
    AboutUsPageComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
