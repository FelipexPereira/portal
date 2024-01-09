import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/app/enviroment/enviroment';
import { Login } from '../cadastro/cadastro.service';
import { BehaviorSubject, Observable, tap } from 'rxjs';

interface RetornoLogin {
  message: string,
  token: string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private tokenKey = 'token';

  private apiUrl = enviroment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  public login(dados: Login): Observable<RetornoLogin> {
    return this.http.post<RetornoLogin>(`${this.apiUrl}/api/login`, dados).pipe(
      tap((resposta) => {
        if (resposta.token) {
          this.armazenarToken(resposta.token);
        }
      })
    )
  }

  private armazenarToken(token: string): void {
    localStorage.setItem('token', token);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    const token = this.getToken();

    return !!token;
  }
}
