import { Observable } from 'rxjs';

export function observables() {
  const observable = new Observable((observer: any) => {
    try {
      observer.next(1);
      observer.next(2);
      observer.complete();
      observer.next(3); // this will not be emitted
    } catch (err) {
      observer.next(err);
    }
  });

  const sub = observable.subscribe({
    next: (x) => console.log(x),
    complete: () => console.log('Completed!'),
    error: (err) => console.log(err),
  });

  sub.unsubscribe();

  // @deprecated: use new Observable((observer)=>{...})
  // const observable2 = Observable.create((observer) => {
  //   observer.next('ha-ha');
  // });

  // @deprecated: pass only 1 argument insted of 3 callback functions
  // observable2.subscribe(
  //   (x) => {
  //     console.log(x);
  //   },
  //   (error) => {
  //     console.log(error);
  //   },
  //   () => {
  //     console.log('Completed');
  //   }
  // );
}
