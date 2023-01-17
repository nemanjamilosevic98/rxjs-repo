import { Observable } from 'rxjs';

export function observables() {
  console.log('%c Observables:', 'color:#c80c8d');
  const observable = new Observable((observer: any) => {
    try {
      observer.next(1);
      observer.next(2);
      observer.complete();
      observer.next(3); // this will not be emitted
      setTimeout(() => {
        observer.next(4); // observable can also be async
      }, 200);
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
