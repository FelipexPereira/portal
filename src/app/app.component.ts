import { LoginService } from './pages/login/login.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PoToolbarAction } from '@po-ui/ng-components';
import { Observable } from 'rxjs';
import { SessionService } from './auth/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isLoggedInMenu$!: Observable<boolean>;

  public menus = [
    { label: 'Home', action: this.chamarRota.bind(this, '/') },
    { label: 'Estoque', action: this.chamarRota.bind(this, '/estoque') },
  ];

  profileActions: Array<PoToolbarAction> = [
    {
      icon: 'po-icon-user',
      label: 'Sair',
      action: this.logout.bind(this),
    },
  ];
  constructor(private route: Router, private sessionService: SessionService) {}

  ngOnInit(): void {
    this.isLoggedInMenu$ = this.sessionService.isLoggedIn$;
  }

  public chamarRota(rota: string) {
    this.route.navigate([rota]);
  }

  public logout() {
    this.sessionService.logout()
  }
}
