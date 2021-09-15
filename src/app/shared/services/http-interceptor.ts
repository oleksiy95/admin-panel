import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoadService } from './load.service';
import { SnackBarService } from './snackbar.service';

@Injectable()
export class LogInterceptor implements HttpInterceptor {
    constructor(private load: LoadService, private snack: SnackBarService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.load.show();
        return next.handle(req).pipe(
            tap(event => {
                if (event instanceof HttpResponse) {
                    // if(event.ok) {
                    //     this.snack.success('Success');
                    // }
                    this.load.hide();
                }
            })
        );
    }
}