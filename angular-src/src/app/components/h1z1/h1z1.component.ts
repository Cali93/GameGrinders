import { Component, Inject } from '@angular/core';

import { ChatExampleData } from '../../chatz/data/chat-example-data';

import { UsersService } from '../../chatz/user/users.service';
import { ThreadsService } from '../../chatz/thread/threads.service';
import { MessagesService } from '../../chatz/message/messages.service';
@Component({
  selector: 'app-h1z1',
  templateUrl: './h1z1.component.html',
  styleUrls: ['./h1z1.component.css']
})
export class H1z1Component {

  constructor(public messagesService: MessagesService,
    public threadsService: ThreadsService,
    public usersService: UsersService) {
ChatExampleData.init(messagesService, threadsService, usersService);
}

}

