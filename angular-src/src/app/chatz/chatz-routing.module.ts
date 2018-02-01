import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatzModule } from './chatz.module';
import { ChatPageComponent } from './chat-page/chat-page.component';

const routes: Routes = [
  { path: 'chat', component: ChatPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatzRoutingModule { }
