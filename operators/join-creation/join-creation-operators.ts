import {
  timer,
  combineLatest,
  takeUntil,
  map,
  interval,
  range,
  concat,
  forkJoin,
  of,
  take,
  merge,
  partition,
  race,
  zip,
} from 'rxjs';

export function operatorCombineLatest() {
  if (handleClick('combineLatest')) {
    // Combines multiple Observables to create an Observable whose values are calculated from the latest values of each of its input Observables
    const firstTimer = timer(0, 1000); // emit 0, 1, 2... after every second, starting from now
    // emit 0, 1, 2... after every second, starting 0,5s from now
    const secondTimer = timer(500, 1000);
    combineLatest([firstTimer, secondTimer])
      .pipe(takeUntil(timer(5000)))
      .subscribe((value) => console.log(value));
  }
}

export function operatorConcat() {
  if (handleClick('concat')) {
    // Creates an output Observable which sequentially emits all values from the first given Observable and then moves on to the next
    const timerObs = interval(1000).pipe(take(4));
    const rangeObs = range(500, 5);
    const result = concat(timerObs, rangeObs);
    result.subscribe((x) => console.log(x));
  }
}

export function operatorForkJoin() {
  if (handleClick('forkJoin')) {
    // Wait for Observables to complete and then combine last values they emitted; complete immediately if an empty array is passe
    const observable = forkJoin({
      foo: of(1, 2, 3, 4),
      bar: Promise.resolve(8),
      baz: timer(4000),
    });
    observable.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('This is how it ends!'),
    });
  }
}

export function operatorMerge() {
  if (handleClick('merge')) {
    // Flattens multiple Observables together by blending their values into one Observable
    const timer1 = interval(1000).pipe(
      map((x) => 'timer1: ' + x),
      take(10)
    );
    const timer2 = interval(2000).pipe(
      map((x) => 'timer2: ' + x),
      take(6)
    );
    const timer3 = interval(500).pipe(
      map((x) => 'timer3: ' + x),
      take(10)
    );

    const concurrent = 2; // the argument
    const merged = merge(timer1, timer2, timer3, concurrent);
    merged.subscribe((x) => console.log(x));
  }
}

export function operatorPartition() {
  if (handleClick('partition')) {
    // It's like filter, but returns two Observables: one like the output of filter, and the other with values that did not pass the condition
    const observableValues = of(1, 2, 3, 4, 5, 6);
    const [evens$, odds$] = partition(
      observableValues,
      (value) => value % 2 === 0
    );

    odds$.subscribe((x) => console.log('odds', x));
    evens$.subscribe((x) => console.log('evens', x));
  }
}

export function operatorRace() {
  if (handleClick('race')) {
    // Race operator returns an observable, that when subscribed to, subscribes to all source observables immediately. As soon as one of the source observables emits a value, the result unsubscribes from the other source
    const obs1 = interval(7000).pipe(
      take(1),
      map(() => 'slow one')
    );
    const obs2 = interval(3000).pipe(
      take(1),
      map(() => 'fast one')
    );
    const obs3 = interval(5000).pipe(
      take(1),
      map(() => 'medium one')
    );

    race(obs1, obs2, obs3).subscribe((winner) => console.log(winner));
  }
}

export function operatorZip() {
  if (handleClick('zip')) {
    // Combines multiple Observables to create an Observable whose values are calculated from the values, in order, of each of its input Observables
    const age$ = of(27, 25, 29);
    const name$ = of('Foo', 'Bar', 'Beer');
    const isDev$ = of(true, true, false);

    zip(age$, name$, isDev$)
      .pipe(map(([age, name, isDev]) => ({ age, name, isDev })))
      .subscribe((x) => console.log(x));
  }
}

// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------

function handleClick(operatorName) {
  const descriptionElem = document.getElementById(
    'join-creation-' + operatorName + '-description'
  );
  if (descriptionElem.style.display === 'none') {
    console.log(
      '%c Join-Creation Operator ' + operatorName + ':',
      'color:#add929'
    );
    descriptionElem.style.display = 'block';
    return true;
  } else {
    descriptionElem.style.display = 'none';
  }
  return false;
}
