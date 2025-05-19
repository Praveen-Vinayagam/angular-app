import { Component, EventEmitter, Input, input, Output } from '@angular/core';

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

  // Decorator Input Approach
  @Input({required:true}) id !: string;
  @Input({ required: true }) avatar !: string;
  // @Input({ required: true }) name !: string;

  // Signal Input Approach
  name = input.required<string>();

  // Decorator Output Approach
  @Output() userClick = new EventEmitter();

  get avatarPath() {
    return 'assets/user/' + this.avatar;
  }

  onUserClick() {
    this.userClick.emit(this.id);
    console.log('User clicked ' + this.name + ' On ' + new Date().toLocaleString());
  }

}