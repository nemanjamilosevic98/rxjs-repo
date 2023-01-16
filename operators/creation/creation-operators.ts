import {
  from,
  fromEvent,
  fromEventPattern,
  generate,
  iif,
  interval,
  of,
  range,
  takeUntil,
  timer,
} from 'rxjs';

export function creationOperators() {
  changeTemplate();

  // of (emits each argument in whole as a separate value)
  // operatorOf();

  // range (emits a sequence of numbers in a range)
  // operatorRange();

  // from (array -> Observable)
  // operatorFrom();

  // fromEvent (to listen specific events on target element)
  // operatorFromEvent();

  // fromEventPattern
  // operatorFromEventPattern();

  // timer (creates an observable that will wait for a specified time period, before emitting the number 0)
  // operatorTimer();

  // interval (every x ms emit i++, i=0 initially)
  // operatorInterval();

  // generate (use it instead of for loop)
  // operatorGenerate();

  // iif (Change at runtime which Observable will be subscribed, depending on condition)
  // operatorIif();
}

function operatorOf() {
  // (emits each argument in whole as a separate value)
  of(1, [1, 2, 3], 'Nemanja').subscribe((x) => console.log(x));
}

function operatorRange() {
  // (emits a sequence of numbers in a range)
  range(1, 5).subscribe((x) => console.log(x));
}

function operatorFrom() {
  // from (array -> Observable)
  from([
    {
      name: 'Nemanja',
      team: 'zuti',
    },
    { name: 'Teodora', team: 'zuti' },
  ]).subscribe((x) => console.log(x));
}

function operatorFromEvent() {
  // fromEvent (to listen specific events on target element)
  fromEvent(document, 'click')
    .pipe(takeUntil(timer(5000))) // unsubscribe after 5s
    .subscribe((event) => console.log(event));
}

function operatorFromEventPattern() {
  fromEventPattern(addClickHandler, removeClickHandler).subscribe((x) =>
    console.log(x)
  );
}

function operatorTimer() {
  // timer (creates an observable that will wait for a specified time period, before emitting the number 0)
  timer(2000).subscribe((x) => console.log('timer emits:' + x));
}

function operatorInterval() {
  // interval (every x ms emit i++, i=0 initially)
  // ----------------------------
  // every 500ms emit i++
  const sub1 = interval(500).subscribe((i) => console.log('i=' + i));
  setTimeout(() => {
    sub1.unsubscribe(); // stop emision after 2000ms
  }, 2000);
  // ----------------------------
  setTimeout(() => {
    interval(500) // every 500ms emit j++
      .pipe(takeUntil(timer(2500))) // stop emision after 2500ms
      .subscribe((j) => console.log('j=' + j));
  }, 2000);
  // ----------------------------
}

function operatorGenerate() {
  // generate (use it instead of for loop)
  generate({
    initialState: 0,
    condition: (x: number) => x < 5,
    iterate: (x: number) => x + 1,
  }).subscribe((x) => console.log(x));
}

function operatorIif() {
  // iif (Change at runtime which Observable will be subscribed, depending on condition)
  let subscribeToFirst;
  // atguments: condition, trueResultObservable, falseResultObservable
  const firstOrSecond = iif(() => subscribeToFirst, of('first'), of('second'));

  subscribeToFirst = true; // first observable will be subscribed
  firstOrSecond.subscribe((value) => console.log(value));

  subscribeToFirst = false; // second observable will be subscribed
  firstOrSecond.subscribe((value) => console.log(value));
}

// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------
function changeTemplate() {
  const subtitleElem = document.getElementById('subtitle');
  subtitleElem.innerHTML = 'Creation Operators';
  document.getElementById('main-content').style.display = 'none';
}

function addClickHandler(handler) {
  document.addEventListener('click', handler);
}

function removeClickHandler(handler) {
  document.removeEventListener('click', handler);
}
