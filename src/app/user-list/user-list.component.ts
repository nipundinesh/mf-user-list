import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  usersList;
  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {

    this.userService.getUsers().subscribe((users) => {

      console.log(users);

      this.usersList = users;
    });

  }


  showProfile(user) {
    console.log('showProfile btn clicked');
    console.log(user);
  }

}
