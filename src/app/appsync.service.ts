import { Injectable } from '@angular/core';
import AWSAppSyncClient from 'aws-appsync';
import aws_exports from '../aws-exports';
import { AUTH_TYPE } from 'aws-appsync';
import {Auth } from 'aws-amplify';


@Injectable({
  providedIn: 'root'
})
export class AppsyncService {

  _hc;

  constructor() { 
    const client = new AWSAppSyncClient({
      url: aws_exports.aws_appsync_graphqlEndpoint,
      region: aws_exports.aws_project_region,
      auth: {
        type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
        jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken()
      }
    });
    this._hc = client;
  }

  hc() {
    return this._hc.hydrated()
  }
}
