import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { Login } from '../pages/cadastro/cadastro.service';
import { enviroment } from '../enviroment/enviroment';
import { Router } from '@angular/router';

interface RetornoLogin {
  message: string;
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private tokenKey = 'token';

  private apiUrl = enviroment.apiUrl;

  public isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor(private http: HttpClient, private router: Router) {}

  public login(dados: Login): Observable<RetornoLogin> {
    return this.http.post<RetornoLogin>(`${this.apiUrl}/api/login`, dados).pipe(
      map((resposta: any) => {
        console.log(resposta);
        if (resposta.token) {
          localStorage.setItem('token', resposta.token);

          localStorage.setItem('user', resposta.user);

          this.isLoggedIn$.next(true)

          return resposta
        }
        return resposta
      })
    );
  }


  logout(): void {
    localStorage.clear();
    this.isLoggedIn$.next(false);
    this.router.navigate(["/login"]);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    const token = this.getToken();

    return !!token;
  }
}
