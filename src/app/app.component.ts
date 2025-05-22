import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { USERS_LIST } from "./users-list";
import { TasksComponent } from "./tasks/tasks.component";
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = USERS_LIST;

  selectedID = 'u1';

  get selectedUser() {
    return this.users.find(user => user.id === this.selectedID)!;
  }

  onUserClick(id: string) {
    this.selectedID = id;
    console.log('User clicked ' + id + ' On ' + new Date().toLocaleString());
  }
}
