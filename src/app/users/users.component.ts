import { Component, OnInit } from '@angular/core';
import { UsersService } from './user.service';
import { ResponseUsers } from './user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {

  responseUsers: ResponseUsers;

  constructor(private userService: UsersService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.userService.getUsers()
    .subscribe(res => this.responseUsers = res)
  }

}
