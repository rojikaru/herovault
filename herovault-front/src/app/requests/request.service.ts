import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Apollo, TypedDocumentNode } from 'apollo-angular';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

/**
 * A service that handles requests to the GraphQL API
 */
@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(
    private readonly apollo: Apollo,
    private readonly auth: AuthService,
  ) { }

  /**
   * Acquires an access token from Auth0 with required permissions
   * @param permissions Token permissions required to execute the query (if any)
   * @returns The access token
   */
  private async getAccessToken(permissions: string[] | null = null): Promise<string> {
    // TODO: Implement permissions

    // Get the access token with required permissions
    return (await firstValueFrom(this.auth.getAccessTokenWithPopup({
      cacheMode: 'on',
      authorizationParams: {
        audience: environment.audience,
      }
    })))!
  }

  /**
   * A generic query function that retrieves data from the GraphQL API
   * @param query A GraphQL query to execute
   * @param authorize Should the request include Authorization header
   * @param permissions Token permissions required to execute the query (if any)
   * @returns 
   */
  async query<T>(
    query: TypedDocumentNode<unknown, unknown>,
    authorize: boolean = false,
    permissions: string[] | null = null
  ): Promise<T> {
    // Get the access token if the request requires authorization
    const token = authorize ? await this.getAccessToken(permissions) : null

    // Execute the query and unwrap the Observable response
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
      throw errors || error
    }

    if (!data) {
      throw new Error('No data')
    }

    return data
  }

  /**
   * A generic GraphQL API mutation function
   * @param query A GraphQL query to execute
   * @param authorize Should the request include Authorization header
   * @param permissions Token permissions required to execute the query (if any)
   * @returns 
   */
  async mutate<T>(
    mutation: TypedDocumentNode<unknown, unknown>,
    authorize: boolean = false,
    permissions: string[] | null = null
  ): Promise<T | null> {
    // Get the access token if the request requires authorization
    const token = await this.getAccessToken(permissions)

    // Execute the mutation and unwrap the Observable response
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

    // Return null if no data is returned (prevent undefined)
    return data ?? null
  }
}
