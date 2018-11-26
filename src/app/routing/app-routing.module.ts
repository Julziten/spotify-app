import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrincipalComponent } from '../components/principal/principal.component';
import { ArtistComponent } from '../components/artist/artist.component';
import { AlbumComponent } from '../components/album/album.component';
import { HeaderComponent } from '../components/header/header.component';
import { PlaylistComponent } from '../components/playlist/playlist.component';
import { TracksComponent } from '../components/tracks/tracks.component';
import { AuthGuard } from '../auth/auth-guard.service';
import { ProfileComponent } from '../components/profile/profile.component';
import { LoginnComponent } from '../components/loginn/loginn.component';
import { RegisterComponent } from './../components/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'principal', pathMatch: 'full' },
  { path: 'header', component: HeaderComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'playlist', component: PlaylistComponent },
  { path: 'tracks', canActivate: [AuthGuard], component: TracksComponent},
  { path: 'artists/:id', component: ArtistComponent },
  { path: 'album/:id', component: AlbumComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'loginn', component: LoginnComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
