import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Apollo, TypedDocumentNode } from 'apollo-angular';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(
    private readonly apollo: Apollo,
    private readonly auth: AuthService,
  ) { }

  private async getAccessToken(): Promise<string> {
    return (await firstValueFrom(this.auth.getAccessTokenWithPopup({
      cacheMode: 'on',
      authorizationParams: {  
        audience: environment.audience,
      }
    })))!
  }

  async query<T>(
    query: TypedDocumentNode<unknown, unknown>,
    authorize: boolean = false,
    permissions: string[] | null = null
  ): Promise<T> {
    const token = authorize ? await this.getAccessToken() : ''
    console.log(token)

    const { data, error, errors } = await firstValueFrom(this.apollo.query<T>({
      query,
      context: authorize ?
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
        : {},
      errorPolicy: 'all'
    }))

    if (errors || error) {
      throw errors || [error]
    }

    if (!data) {
      throw new Error('No data')
    }

    return data
  }

  async mutate<T>(
    mutation: TypedDocumentNode<unknown, unknown>,
    authorize: boolean = false
  ): Promise<T | null> {
    const token = await this.getAccessToken()

    const { data, errors } = await firstValueFrom(this.apollo.mutate<T>({
      mutation,
      context: authorize ?
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
        : {},
      errorPolicy: 'all'
    }))

    if (errors) {
      throw errors
    }

    // Return null if no data is returned (null or undefined)
    return data ?? null
  }
}
