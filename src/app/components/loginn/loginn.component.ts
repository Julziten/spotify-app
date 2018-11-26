import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService } from '../../services/alert.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
    selector: 'app-loginn',
    templateUrl: 'loginn.component.html',
    styles: [`
    .btn {
      margin-right: 20px;
    }`],
})

export class LoginnComponent implements OnInit {


    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;


    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

        ngOnInit() {
          this.loginForm = this.formBuilder.group({
              username: ['', Validators.required],
              password: ['', Validators.required]
          });

          this.authenticationService.logout();

          this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
      }

      get f() { return this.loginForm.controls; }

      onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                  this.router.navigate(['/profile']);
                    console.log(data);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
