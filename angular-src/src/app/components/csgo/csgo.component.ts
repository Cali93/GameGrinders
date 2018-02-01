import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-csgo',
  templateUrl: './csgo.component.html',
  styleUrls: ['./csgo.component.css']
})
export class CsgoComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  room = 'CS:GO';
  date = new Date(Date.now()).toLocaleString();
  user: Object;
  chatForm: any;
  currentChat: any[];
  message: string;
  messagein: any;
  ngOnInit() {
    this.currentChat = [
      { user: 'bob', message: 'hey, what are you doing?' },
      { user: 'jeff', message: 'learning angular 4' },
      { user: 'bob', message: 'cool, angular is great' },
      { user: 'jeff', message: 'i know that\'s right' },
    ];
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    },
    err => {
      console.log(err);
      return false;
    });
  }
  onLink() {
  this.router.navigate(['/profile']);
  }
  chat(formValue) {
    const newMessage = Object.assign(formValue, { user: 'anonymous'});
    this.currentChat.push(newMessage);
  }

}
