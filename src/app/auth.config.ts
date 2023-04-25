import {AuthConfig} from 'angular-oauth2-oidc';
export const authConfig: AuthConfig = {
  issuer: 'http://localhost:8081/realms/SpringK',
  redirectUri: window.location.origin,
  clientId: 'spring-pkce-client',
  responseType: 'code',
  strictDiscoveryDocumentValidation: true,
  scope: 'openid profile email offline_access',
}
