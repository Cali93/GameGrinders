import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { GamesComponent } from './components/games/games.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { ModalComponent } from './components/modal/modal.component';
import { NgbtabsComponent } from './components/ngbtabs/ngbtabs.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { NgbgamestabComponent } from './components/ngbgamestab/ngbgamestab.component';
import { PcgamesComponent } from './components/pcgames/pcgames.component';
import { Ps4gamesComponent } from './components/ps4games/ps4games.component';
import { XboxgamesComponent } from './components/xboxgames/xboxgames.component';
import { MobilegamesComponent } from './components/mobilegames/mobilegames.component';

import { CsgoComponent } from './components/csgo/csgo.component';
import { LolComponent } from './components/lol/lol.component';
import { Gta5Component } from './components/gta5/gta5.component';
import { PubgComponent } from './components/pubg/pubg.component';
import { H1z1Component } from './components/h1z1/h1z1.component';
import { DotaComponent } from './components/dota/dota.component';
import { FortniteComponent } from './components/fortnite/fortnite.component';
// import { ChatModule } from './chat/chat.module';
import { ChatzModule } from './chatz/chatz.module';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'games', component: GamesComponent},
  {path: 'games/pc', component: PcgamesComponent},
  {path: 'games/ps4', component: Ps4gamesComponent},
  {path: 'games/xbox', component: XboxgamesComponent},
  {path: 'games/mobile', component: MobilegamesComponent},
  {path: 'games/pc/csgo', component: CsgoComponent},
  {path: 'games/pc/lol', component: LolComponent},
  {path: 'games/pc/fortnite', component: FortniteComponent},
  {path: 'games/pc/gta5', component: Gta5Component},
  {path: 'games/pc/pubg', component: PubgComponent},
  {path: 'games/pc/h1z1', component: H1z1Component},
  {path: 'games/pc/dota2', component: DotaComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]}
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    GamesComponent,
    DashboardComponent,
    ProfileComponent,
    ModalComponent,
    NgbtabsComponent,
    JumbotronComponent,
    NgbgamestabComponent,
    PcgamesComponent,
    Ps4gamesComponent,
    XboxgamesComponent,
    MobilegamesComponent,
    CsgoComponent,
    LolComponent,
    Gta5Component,
    PubgComponent,
    H1z1Component,
    DotaComponent,
    FortniteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),
    NgbModule.forRoot(),
    // ChatModule.forRoot(),
    ChatzModule
  ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
