import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat'
import { environment } from '../environments/environment.development';
@NgModule({
  declarations: [
    
  ],
  imports: [
    AppModule,
    ServerModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
