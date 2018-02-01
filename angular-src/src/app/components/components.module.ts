import { NgModule } from '@angular/core';
import { CsgoComponent } from './csgo/csgo.component';
import { LolComponent } from './lol/lol.component';
import { FortniteComponent } from './fortnite/fortnite.component';
import { Gta5Component } from './gta5/gta5.component';
import { PubgComponent } from './pubg/pubg.component';
import { H1z1Component } from './h1z1/h1z1.component';
import { DotaComponent } from './dota/dota.component';

@NgModule({
declarations: [CsgoComponent, LolComponent, FortniteComponent, Gta5Component, PubgComponent, H1z1Component, DotaComponent],
imports: [],
exports: []

})

export class ComponentsModule {}
