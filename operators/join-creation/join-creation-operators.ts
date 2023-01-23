import { timer, combineLatest, takeUntil, map } from 'rxjs';

export function operatorCombineLatest() {
  console.log('%c Join-Creation Operator combineLatest:', 'color:#add929');
  // Combines multiple Observables to create an Observable whose values are calculated from the latest values of each of its input Observables

  const firstTimer = timer(0, 1000); // emit 0, 1, 2... after every second, starting from now
  // emit 0, 1, 2... after every second, starting 0,5s from now
  const secondTimer = timer(500, 1000).pipe(
    map((val) => {
      return 1000 + val;
    })
  );
  combineLatest([firstTimer, secondTimer])
    .pipe(takeUntil(timer(5000)))
    .subscribe((value) => console.log(value));
}

export function operatorConcat() {
  console.log('%c Join-Creation Operator concat:', 'color:#add929');
}

export function operatorForkJoin() {
  console.log('%c Join-Creation Operator forkJoin:', 'color:#add929');
}

export function operatorMerge() {
  console.log('%c Join-Creation Operator merge:', 'color:#add929');
}

export function operatorPartition() {
  console.log('%c Join-Creation Operator partition:', 'color:#add929');
}

export function operatorRace() {
  console.log('%c Join-Creation Operator race:', 'color:#add929');
}

export function operatorZip() {
  console.log('%c Join-Creation Operator zip:', 'color:#add929');
}
