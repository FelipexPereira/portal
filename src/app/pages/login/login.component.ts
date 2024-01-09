import { Component } from '@angular/core';
import { PoNotificationService } from '@po-ui/ng-components';
import { PoPageLogin, PoPageLoginLiterals } from '@po-ui/ng-templates';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/auth/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public customLiterals: PoPageLoginLiterals = {
    loginPlaceholder: 'Insira seu Login',
    passwordPlaceholder: 'Insira sua Senha',
    loginHint: 'Caso não possua usuário entre em contato com o suporte',
  };

  public exceededAttempts: number = 0;

  constructor(
    private poNotification: PoNotificationService,
    private sessionService: SessionService,
    private router: Router
  ) {}

  loginSubmit(formData: PoPageLogin) {
    if (this.exceededAttempts <= 0) {
      this.sessionService.login(formData).subscribe((value) => {
        if(value)
        this.poNotification.success(`Conectado com sucesso`);
        this.router.navigate(["/"])
      });
    }
  }

  
}
