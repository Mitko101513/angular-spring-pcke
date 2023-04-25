import {Component, OnDestroy} from '@angular/core';
import {OAuthService} from 'angular-oauth2-oidc';
import {authConfig} from './auth.config';
import {AppService} from './app.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [OAuthService, AppService]
})
export class AppComponent implements OnDestroy{
  title = 'angular-spring-pcke';
  text = '';
  helloSubscription: Subscription;

  constructor(private oauthService: OAuthService, private appService: AppService) {
    this.configure();
    this.helloSubscription = appService.hello().subscribe(response => {
      this.text = response;
    });
  }

  private configure() {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin(); // This method is trigger issuer uri
  }

  ngOnDestroy(): void {
    this.helloSubscription.unsubscribe();
  }

  login() {
    this.oauthService.initCodeFlow();
  }

  logout() {
    this.oauthService.logOut();
  }
}
