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
  if (handleBufferClick()) {
    // Collects values from the past as an array, and emits that array only when another Observable emits
    const clicks = fromEvent(document, 'click').pipe(takeUntil(timer(7000)));
    const intervalEvents = interval(1000);
    const buffered = intervalEvents.pipe(buffer(clicks));
    buffered.subscribe((x) => console.log('buffer: ' + x));
  }
}

function handleBufferClick() {
  const descriptionElem = document.getElementById(
    'transformation-buffer-description'
  );
  if (descriptionElem.style.display === 'none') {
    console.log('%c Transformation Operator buffer:', 'color:#add929');
    descriptionElem.style.display = 'block';
    return true;
  } else {
    descriptionElem.style.display = 'none';
  }
  return false;
}

export function operatorBufferCount() {
  if (handleBufferCountClick()) {
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

function handleBufferCountClick() {
  const descriptionElem = document.getElementById(
    'transformation-bufferCount-description'
  );
  if (descriptionElem.style.display === 'none') {
    console.log('%c Transformation Operator bufferCount:', 'color:#add929');
    descriptionElem.style.display = 'block';
    return true;
  } else {
    descriptionElem.style.display = 'none';
  }
  return false;
}

export function operatorBufferTime() {
  if (handleBufferTimeClick()) {
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

function handleBufferTimeClick() {
  const descriptionElem = document.getElementById(
    'transformation-bufferTime-description'
  );
  if (descriptionElem.style.display === 'none') {
    console.log('%c Transformation Operator bufferTime:', 'color:#add929');
    descriptionElem.style.display = 'block';
    return true;
  } else {
    descriptionElem.style.display = 'none';
  }
  return false;
}

export function operatorBufferToggle() {
  if (handleBufferToggleClick()) {
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

function handleBufferToggleClick() {
  const descriptionElem = document.getElementById(
    'transformation-bufferToggle-description'
  );
  if (descriptionElem.style.display === 'none') {
    console.log('%c Transformation Operator bufferToggle:', 'color:#add929');
    descriptionElem.style.display = 'block';
    return true;
  } else {
    descriptionElem.style.display = 'none';
  }
  return false;
}

export function operatorBufferWhen() {
  if (handleBufferWhenClick()) {
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

function handleBufferWhenClick() {
  const descriptionElem = document.getElementById(
    'transformation-bufferWhen-description'
  );
  if (descriptionElem.style.display === 'none') {
    console.log('%c Transformation Operator bufferWhen:', 'color:#add929');
    descriptionElem.style.display = 'block';
    return true;
  } else {
    descriptionElem.style.display = 'none';
  }
  return false;
}

export function operatorWindow() {
  if (handleWindowClick()) {
    //
  }
}

function handleWindowClick() {
  const descriptionElem = document.getElementById(
    'transformation-window-description'
  );
  if (descriptionElem.style.display === 'none') {
    console.log('%c Transformation Operator window:', 'color:#add929');
    descriptionElem.style.display = 'block';
    return true;
  } else {
    descriptionElem.style.display = 'none';
  }
  return false;
}
