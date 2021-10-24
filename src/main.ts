import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Amplify from '@aws-amplify/core';
import amplify from './aws-exports';
import Auth from '@aws-amplify/auth';
import API from '@aws-amplify/api';
import PubSub from '@aws-amplify/pubsub';

Amplify.configure(amplify);
Auth.configure(amplify);
API.configure(amplify);
PubSub.configure(amplify);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
