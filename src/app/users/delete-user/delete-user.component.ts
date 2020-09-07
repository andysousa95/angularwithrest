import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  id: string;
  user: User;

  constructor(private userService: UsersService, private route: ActivatedRoute, private _route: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(this.id).subscribe(res => {
      this.user = res.data;
    });
  }

  delete(){
    this.userService.deleteUser(this.id).subscribe(res => {
      alert('Usuário apagado com sucesso.');
      this._route.navigate(['/users']);
    })
  }

  cancel(){
    this._route.navigate(['/users']);
  }
}