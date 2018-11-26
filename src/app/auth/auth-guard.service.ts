// import { Observable } from 'rxjs';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
// import { Injectable } from '@angular/core';
// import { AuthService } from './auth.service';

// @Injectable()
// export class AuthGuard implements CanActivate {

//   constructor(private authService: AuthService, private router: Router) { }

//   canActivate(route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
//       return this.authService.isAuthenticated()
//       .then(
//         (authenticated: boolean) => {
//           if (authenticated) {
//             return true;
//           } else {
//             this.router.navigate(['/']);
//           }
//         }
//       );
//     }
//   }


import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
