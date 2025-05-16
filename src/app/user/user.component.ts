import { Component, Input, input } from '@angular/core';

// const randomUser = Math.floor(Math.random() * USERS_LIST.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {

  /* State Approach */

  // selectedUser = USERS_LIST[randomUser];

  // get avatarPath() {
  //   return 'assets/user/' + this.selectedUser.avatar;
  // }

  // onUserClick() {
  //   console.log('User clicked ' + this.selectedUser.name + ' On ' + new Date().toLocaleString());
  //   const randomUser = Math.floor(Math.random() * USERS_LIST.length);
  //   this.selectedUser = USERS_LIST[randomUser];
  // }

  /* Signal Approach */

  // selectedUser = signal(USERS_LIST[randomUser]);

  // get avatarPath() {
  //   return 'assets/user/' + this.selectedUser().avatar;
  // }

  // onUserClick() {
  //   console.log('User clicked ' + this.selectedUser.name + ' On ' + new Date().toLocaleString());
  //   const randomUser = Math.floor(Math.random() * USERS_LIST.length);
  //   this.selectedUser.set(USERS_LIST[randomUser]);
  // }

  // Decorator Approach
  @Input({ required: true }) avatar !: string;
  // @Input({ required: true }) name !: string;

  // Signal Approach
  name = input.required<string>();

  get avatarPath() {
    return 'assets/user/' + this.avatar;
  }

  onUserClick() {
    console.log('User clicked ' + this.name + ' On ' + new Date().toLocaleString());
  }

}