import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseUsers, ResponseCreate, RequestCreate, ResponseUser, RequestUpdate, ResponseUpdate } from './user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  //Consumindo dados da API usando a URL
  private url = "https://reqres.in/api/users";

  constructor(private http: HttpClient) { }

  //Listando os usuários
  getUsers(): Observable<ResponseUsers> {
    return this.http.get<ResponseUsers>(this.url);
  }
  //Criando os usuários
  createUser(request: RequestCreate): Observable<ResponseCreate>{
    return this.http.post<ResponseCreate>(this.url, request);
  }

  getUser(id: string): Observable<ResponseUser> {
    const _url = `${this.url}/${id}`
    return this.http.get<ResponseUser>(_url);
  }

  //Atualizando os usuários
  updateUser(id: string, request: RequestUpdate): Observable<ResponseUpdate> {
    const _url = `${this.url}/${id}`
    return this.http.put<ResponseUpdate>(_url, request);
  }
  //Excluindo os usuários
  deleteUser(id: string): Observable<any> {
    const _url = `${this.url}/${id}`;
    return this.http.delete<any>(_url);
  }
}
