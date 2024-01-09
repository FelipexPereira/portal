import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/app/enviroment/enviroment';

export interface Login {
  login: string;
  senha: string;
}

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  private apiUrl = enviroment.apiUrl;

  constructor(private http: HttpClient) {}

  postUsuario(value: Login): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/users`, value);
  }
}
