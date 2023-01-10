import {
  from,
  fromEvent,
  fromEventPattern,
  interval,
  takeUntil,
  timer,
} from 'rxjs';

export function creationOperators() {
  changeTemplate();

  // from (array -> Observable)
  // operatorFrom();

  // fromEvent (to listen specific events on target element)
  // operatorFromEvent();

  // fromEventPattern
  // operatorFromEventPattern();

  // interval (every x ms emit i++, i=0 initially)
  // operatorInterval();
}

function operatorFrom() {
  // ----------------------------
  //
  from([
    {
      name: 'Nemanja',
      team: 'zuti',
    },
    { name: 'Teodora', team: 'zuti' },
  ]).subscribe((x) => console.log(x));
  // ----------------------------
}

function operatorFromEvent() {
  // ----------------------------
  fromEvent(document, 'click')
    .pipe(takeUntil(timer(5000))) // unsubscribe after 5s
    .subscribe((event) => console.log(event));
  // ----------------------------
}

function operatorFromEventPattern() {
  fromEventPattern(addClickHandler, removeClickHandler).subscribe((x) =>
    console.log(x)
  );
}

function addClickHandler(handler) {
  document.addEventListener('click', handler);
}

function removeClickHandler(handler) {
  document.removeEventListener('click', handler);
}

function operatorInterval() {
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

function changeTemplate() {
  const subtitleElem = document.getElementById('subtitle');
  subtitleElem.innerHTML = 'Creation Operators';
  document.getElementById('main-content').style.display = 'none';
}
