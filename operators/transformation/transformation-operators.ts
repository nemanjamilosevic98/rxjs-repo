import {
  buffer,
  fromEvent,
  interval,
  takeUntil,
  timer,
  bufferCount,
  bufferTime,
  bufferToggle,
  EMPTY,
  bufferWhen,
} from 'rxjs';

export function operatorBuffer() {
  if (handleClick('buffer')) {
    // Collects values from the past as an array, and emits that array only when another Observable emits
    const clicks = fromEvent(document, 'click').pipe(takeUntil(timer(7000)));
    const intervalEvents = interval(1000);
    const buffered = intervalEvents.pipe(buffer(clicks));
    buffered.subscribe((x) => console.log('buffer: ' + x));
  }
}

export function operatorBufferCount() {
  if (handleClick('bufferCount')) {
    // Collects values from the past as an array, and emits that array only when its size reaches bufferSize

    // Emit the last two click events as an array
    const clicks = fromEvent(document, 'click');
    const buffered = clicks.pipe(bufferCount(2), takeUntil(timer(5000)));
    buffered.subscribe((x) => console.log('bufferCount: ' + x));

    // On every click, emit the last two click events as an array
    const buffered2 = clicks.pipe(bufferCount(2, 1), takeUntil(timer(5000)));
    buffered2.subscribe((x) => console.log('bufferCount2: ' + x));
  }
}

export function operatorBufferTime() {
  if (handleClick('bufferTime')) {
    // Collects values from the past as an array, and emits those arrays periodically in time
    // Every second, emit an array of the recent click events
    const clicks = fromEvent(document, 'click');
    const buffered = clicks.pipe(bufferTime(1000), takeUntil(timer(10000)));
    buffered.subscribe((x) => console.log('bufferTime: ' + x));
    // Every 5 seconds, emit the click events from the next 2 seconds
    const buffered2 = clicks.pipe(
      bufferTime(2000, 5000),
      takeUntil(timer(10000))
    );
    buffered2.subscribe((x) => console.log('bufferTime2: ' + x));
  }
}

export function operatorBufferToggle() {
  if (handleClick('bufferToggle')) {
    // Collects values from the past as an array. Starts collecting only when opening emits, and calls the closingSelector function to get an Observable that tells when to close the buffer
    const clicks = fromEvent(document, 'click');
    const openings = interval(1000);
    const buffered = clicks.pipe(
      bufferToggle(openings, (i) => (i % 2 ? interval(500) : EMPTY)),
      takeUntil(timer(10000))
    );
    buffered.subscribe((x) => console.log('bufferToggle: ' + x));
  }
}

export function operatorBufferWhen() {
  if (handleClick('bufferWhen')) {
    // Collects values from the past as an array. When it starts collecting values, it calls a function that returns an Observable that tells when to close the buffer and restart collecting

    // Emit an array of the last clicks every [1-5] random seconds
    const clicks = fromEvent(document, 'click');
    const buffered = clicks.pipe(
      bufferWhen(() => interval(1000 + Math.random() * 4000)),
      takeUntil(timer(10000))
    );
    buffered.subscribe((x) => console.log('bufferWhen: ' + x));
  }
}

export function operatorConcatMap() {
  if (handleClick('concatMap')) {
    //
  }
}

export function operatorWindow() {
  if (handleClick('window')) {
    //
  }
}

// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------

function handleClick(operatorName) {
  const descriptionElem = document.getElementById(
    'transformation-' + operatorName + '-description'
  );
  if (descriptionElem.style.display === 'none') {
    console.log(
      '%c Transformation Operator ' + operatorName + ':',
      'color:#add929'
    );
    descriptionElem.style.display = 'block';
    return true;
  } else {
    descriptionElem.style.display = 'none';
  }
  return false;
}
