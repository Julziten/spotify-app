import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../../_models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})

export class ProfileComponent implements OnInit {

  currentUser: User;
  users: User[] = [];

  constructor(private userService: UserService) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
      this.loadAllUsers();
  }

  deleteUser(id: number) {
      this.userService.delete(id).pipe(first()).subscribe(() => {
          this.loadAllUsers();
      });
  }

  private loadAllUsers() {
    this.userService.getAll().subscribe(users => {
      this.users = users;
    });
  }
}
