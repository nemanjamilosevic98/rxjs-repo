import {
  bindCallback,
  catchError,
  from,
  fromEvent,
  fromEventPattern,
  generate,
  iif,
  interval,
  map,
  of,
  range,
  takeUntil,
  timer,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';

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

  // ajax
  // operatorAjax();

  // bindCallback
  // operatorBindCallback();
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

function operatorAjax() {
  // using ajax() to fetch the response object that is being returned from API
  const obs1$ = ajax('https://api.github.com/users?per_page=5').pipe(
    map((userResponse) => userResponse.response),
    catchError((error) => {
      console.log('error: ', error);
      return of(error);
    })
  );

  obs1$.subscribe({
    next: (value) => console.log('ajax response1:', value),
    error: (err) => console.log(err),
  });

  // using ajax.getJSON() to fetch data from API
  const obs2$ = ajax.getJSON('https://api.github.com/users?per_page=5').pipe(
    catchError((error) => {
      console.log('error: ', error);
      return of(error);
    })
  );

  obs2$.subscribe({
    next: (value) => console.log('ajax response2:', value),
    error: (err) => console.log(err),
  });

  // using ajax() with object as argument and method POST with a two seconds delay
  const obs3$ = ajax({
    url: 'https://httpbin.org/delay/2', // 2 sec delay
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'rxjs-custom-header': 'Rxjs',
    },
    body: {
      rxjs: 'Hello World!',
    },
  }).pipe(
    map((fullResponse) => fullResponse.response),
    catchError((error) => {
      console.log('error: ', error);
      return of(error);
    })
  );

  // Using ajax() to fetch. An error object that is being returned from the request
  obs3$.subscribe({
    next: (value) => console.log('ajax response3: ', value),
    error: (err) => console.log(err),
  });

  const obs4$ = ajax('https://api.github.com/404').pipe(
    map((userResponse) => console.log('users: ', userResponse)),
    catchError((error) => {
      return of(error);
    })
  );

  obs4$.subscribe({
    next: (value) => console.log('error: ', value),
    error: (err) => console.log(err),
  });
}

function operatorBindCallback() {
  function sayHello(cb) {
    cb(1 + 2);
  }
  const boundSomeFunction = bindCallback(sayHello);
  boundSomeFunction().subscribe((v) => {
    console.log(v);
  });
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
