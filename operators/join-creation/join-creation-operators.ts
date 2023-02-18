import { timer, combineLatest, takeUntil, map } from 'rxjs';

export function operatorCombineLatest() {
  handleCombineLatestClick();
  // Combines multiple Observables to create an Observable whose values are calculated from the latest values of each of its input Observables
  const firstTimer = timer(0, 1000); // emit 0, 1, 2... after every second, starting from now
  // emit 0, 1, 2... after every second, starting 0,5s from now
  const secondTimer = timer(500, 1000);
  combineLatest([firstTimer, secondTimer])
    .pipe(takeUntil(timer(5000)))
    .subscribe((value) => console.log(value));
}

function handleCombineLatestClick() {
  console.log('%c Join-Creation Operator combineLatest:', 'color:#add929');
  const descriptionElem = document.getElementById(
    'join-creation-combineLatest-description'
  );
  if (descriptionElem.style.display === 'none') {
    descriptionElem.style.display = 'block';
  } else {
    descriptionElem.style.display = 'none';
  }
}

export function operatorConcat() {
  handleConcatClick();
}

function handleConcatClick() {
  console.log('%c Join-Creation Operator concat:', 'color:#add929');
  const descriptionElem = document.getElementById(
    'join-creation-concat-description'
  );
  if (descriptionElem.style.display === 'none') {
    descriptionElem.style.display = 'block';
  } else {
    descriptionElem.style.display = 'none';
  }
}

export function operatorForkJoin() {
  handleForkJoinClick();
}

function handleForkJoinClick() {
  console.log('%c Join-Creation Operator forkJoin:', 'color:#add929');
  const descriptionElem = document.getElementById(
    'join-creation-forkJoin-description'
  );
  if (descriptionElem.style.display === 'none') {
    descriptionElem.style.display = 'block';
  } else {
    descriptionElem.style.display = 'none';
  }
}

export function operatorMerge() {
  handleMergeClick();
}

function handleMergeClick() {
  console.log('%c Join-Creation Operator merge:', 'color:#add929');
  const descriptionElem = document.getElementById(
    'join-creation-merge-description'
  );
  if (descriptionElem.style.display === 'none') {
    descriptionElem.style.display = 'block';
  } else {
    descriptionElem.style.display = 'none';
  }
}

export function operatorPartition() {
  handlePartitionClick();
}

function handlePartitionClick() {
  console.log('%c Join-Creation Operator partition:', 'color:#add929');
  const descriptionElem = document.getElementById(
    'join-creation-partition-description'
  );
  if (descriptionElem.style.display === 'none') {
    descriptionElem.style.display = 'block';
  } else {
    descriptionElem.style.display = 'none';
  }
}

export function operatorRace() {
  handleRaceClick();
}

function handleRaceClick() {
  console.log('%c Join-Creation Operator race:', 'color:#add929');
  const descriptionElem = document.getElementById(
    'join-creation-race-description'
  );
  if (descriptionElem.style.display === 'none') {
    descriptionElem.style.display = 'block';
  } else {
    descriptionElem.style.display = 'none';
  }
}

export function operatorZip() {
  handleZipClick();
}

function handleZipClick() {
  console.log('%c Join-Creation Operator zip:', 'color:#add929');
  const descriptionElem = document.getElementById(
    'join-creation-zip-description'
  );
  if (descriptionElem.style.display === 'none') {
    descriptionElem.style.display = 'block';
  } else {
    descriptionElem.style.display = 'none';
  }
}
