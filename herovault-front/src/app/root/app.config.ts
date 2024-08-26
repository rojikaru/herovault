import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { graphqlProvider } from '../graphql.provider';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { authHttpInterceptorFn, provideAuth0 } from '@auth0/auth0-angular';
import { environment } from '../../environments/environment';

// https://manage.auth0.com/dashboard/eu/dev-8xvrpqdiv8s2tdvo/applications/Ve28XLHczhK53ZDHnSoNamd3hmBzXAxZ/quickstart

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ 
      eventCoalescing: true
    }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(
      withFetch(), 
      withInterceptors([authHttpInterceptorFn])
    ),
    graphqlProvider,
    provideAnimationsAsync(),
    provideAuth0({
      domain: environment.auth0_domain,
      clientId: environment.auth0_client_id,
      authorizationParams: {
        redirect_uri: environment.origin,
      },
      httpInterceptor: {
        allowedList: [
          {
            uri: environment.audience,
            tokenOptions: {
              authorizationParams: {
                audience: environment.audience,
              }
            },
          },
        ],
      },
    }),
  ]
}
