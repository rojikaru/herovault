import { Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { ApplicationConfig } from '@angular/core';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { environment } from '../environments/environment';

const uri = environment.apiUrl;
export function apolloOptionsFactory(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: httpLink.create({ uri }),
    cache: new InMemoryCache(),
  };
}

export const graphqlProvider: ApplicationConfig['providers'] = [
  Apollo,
  {
    provide: APOLLO_OPTIONS,
    useFactory: apolloOptionsFactory,
  },
];
