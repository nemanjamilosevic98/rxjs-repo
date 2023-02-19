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
  if (handleCombineLatestClick()) {
    // Combines multiple Observables to create an Observable whose values are calculated from the latest values of each of its input Observables
    const firstTimer = timer(0, 1000); // emit 0, 1, 2... after every second, starting from now
    // emit 0, 1, 2... after every second, starting 0,5s from now
    const secondTimer = timer(500, 1000);
    combineLatest([firstTimer, secondTimer])
      .pipe(takeUntil(timer(5000)))
      .subscribe((value) => console.log(value));
  }
}

function handleCombineLatestClick() {
  const descriptionElem = document.getElementById(
    'join-creation-combineLatest-description'
  );
  if (descriptionElem.style.display === 'none') {
    console.log('%c Join-Creation Operator combineLatest:', 'color:#add929');
    descriptionElem.style.display = 'block';
    return true;
  } else {
    descriptionElem.style.display = 'none';
  }
  return false;
}

export function operatorConcat() {
  if (handleConcatClick()) {
    // Creates an output Observable which sequentially emits all values from the first given Observable and then moves on to the next
    const timerObs = interval(1000).pipe(take(4));
    const rangeObs = range(500, 5);
    const result = concat(timerObs, rangeObs);
    result.subscribe((x) => console.log(x));
  }
}

function handleConcatClick() {
  const descriptionElem = document.getElementById(
    'join-creation-concat-description'
  );
  if (descriptionElem.style.display === 'none') {
    console.log('%c Join-Creation Operator concat:', 'color:#add929');
    descriptionElem.style.display = 'block';
    return true;
  } else {
    descriptionElem.style.display = 'none';
  }
  return false;
}

export function operatorForkJoin() {
  if (handleForkJoinClick()) {
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

function handleForkJoinClick() {
  const descriptionElem = document.getElementById(
    'join-creation-forkJoin-description'
  );
  if (descriptionElem.style.display === 'none') {
    console.log('%c Join-Creation Operator forkJoin:', 'color:#add929');
    descriptionElem.style.display = 'block';
    return true;
  } else {
    descriptionElem.style.display = 'none';
  }
  return false;
}

export function operatorMerge() {
  if (handleMergeClick()) {
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

function handleMergeClick() {
  const descriptionElem = document.getElementById(
    'join-creation-merge-description'
  );
  if (descriptionElem.style.display === 'none') {
    console.log('%c Join-Creation Operator merge:', 'color:#add929');
    descriptionElem.style.display = 'block';
    return true;
  } else {
    descriptionElem.style.display = 'none';
  }
  return false;
}

export function operatorPartition() {
  if (handlePartitionClick()) {
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

function handlePartitionClick() {
  const descriptionElem = document.getElementById(
    'join-creation-partition-description'
  );
  if (descriptionElem.style.display === 'none') {
    console.log('%c Join-Creation Operator partition:', 'color:#add929');
    descriptionElem.style.display = 'block';
    return true;
  } else {
    descriptionElem.style.display = 'none';
  }
  return false;
}

export function operatorRace() {
  if (handleRaceClick()) {
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

function handleRaceClick() {
  const descriptionElem = document.getElementById(
    'join-creation-race-description'
  );
  if (descriptionElem.style.display === 'none') {
    console.log('%c Join-Creation Operator race:', 'color:#add929');
    descriptionElem.style.display = 'block';
    return true;
  } else {
    descriptionElem.style.display = 'none';
  }
  return false;
}

export function operatorZip() {
  if (handleZipClick()) {
    // Combines multiple Observables to create an Observable whose values are calculated from the values, in order, of each of its input Observables
    const age$ = of(27, 25, 29);
    const name$ = of('Foo', 'Bar', 'Beer');
    const isDev$ = of(true, true, false);

    zip(age$, name$, isDev$)
      .pipe(map(([age, name, isDev]) => ({ age, name, isDev })))
      .subscribe((x) => console.log(x));
  }
}

function handleZipClick() {
  const descriptionElem = document.getElementById(
    'join-creation-zip-description'
  );
  if (descriptionElem.style.display === 'none') {
    console.log('%c Join-Creation Operator zip:', 'color:#add929');
    descriptionElem.style.display = 'block';
    return true;
  } else {
    descriptionElem.style.display = 'none';
  }
  return false;
}
