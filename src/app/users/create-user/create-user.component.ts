import { Component, OnInit } from '@angular/core';
import { RequestCreate, ResponseCreate } from '../user.model';
import { UsersService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  request: RequestCreate = {
    name: '',
    job: ''
  }

  response: ResponseCreate

  constructor(private userService: UsersService) { }

  ngOnInit() {
  }

  save() {
    this.userService.createUser(this.request)
    .subscribe(res => {
      this.response = res;
    });
  }
}
