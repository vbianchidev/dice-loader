import { Component, OnInit } from '@angular/core';
import { delay, Observable, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  numbers: Observable<number[]> = of([1, 2, 3, 4, 5,]);

  loaded$: Observable<boolean> = of(false);
  endAnimation$: Observable<boolean> = of(false);
  
  ngOnInit(): void {
    this.endAnimation$ = of(true).pipe(delay(3000));

    this.loaded$ = this.endAnimation$
      .pipe(
        tap(() => this.loaded$ = of(true).pipe(delay(2000))),
        switchMap(() => this.loaded$)
      );
  }
}
