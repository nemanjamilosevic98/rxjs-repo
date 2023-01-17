import { Observable } from 'rxjs';

export function hotVsColdObservables() {
  console.log('%c Hot vs. Cold Observables:', 'color:#c80c8d');
  // Cold observable
  // data is produced inside the Observable
  // both subscriptions will get different values
  console.log('Cold Observable!');
  const coldObservable = new Observable((observer: any) => {
    observer.next(Math.random());
  });
  const sub1 = coldObservable.subscribe({
    next: (x) => console.log('cold sub1: ' + x),
  });
  const sub2 = coldObservable.subscribe({
    next: (x) => console.log('cold sub2: ' + x),
  });

  // Hot observable
  // data is produced outside the Observable
  // both subscriptions will get the same value
  const value = Math.random();
  console.log('Hot Observable!');
  const hotObservable = new Observable((observer: any) => {
    observer.next(value);
  });
  const sub3 = hotObservable.subscribe({
    next: (x) => console.log('hot sub3: ' + x),
  });
  const sub4 = hotObservable.subscribe({
    next: (x) => console.log('hot sub4: ' + x),
  });

  sub1.unsubscribe();
  sub2.unsubscribe();
  sub3.unsubscribe();
  sub4.unsubscribe();
}
