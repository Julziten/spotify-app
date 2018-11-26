import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/fake-backend';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';

// Services

import { AlertService } from './services/alert.service';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { MyserviceService } from './services/myservice.service';
import { AppRoutingModule } from './routing/app-routing.module';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';
import { HeaderComponent } from './components/header/header.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { TracksComponent } from './components/tracks/tracks.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginnComponent } from './components/loginn/loginn.component';
import { RegisterComponent } from './components/register/register.component';
import { AlertComponent } from './directives/alert.component';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ArtistComponent,
    AlbumComponent,
    HeaderComponent,
    PlaylistComponent,
    ProfileComponent,
    AppComponent,
    LoginnComponent,
    RegisterComponent,
    AlertComponent,
    TracksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    AlertService,
    MyserviceService,
    AuthGuard,
    AuthService,
    AuthenticationService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
