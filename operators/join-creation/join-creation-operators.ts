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
    const timerObs = interval(1000).pipe(takeUntil(timer(4000)));
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
