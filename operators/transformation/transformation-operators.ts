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
  concatMap,
  take,
  exhaustAll,
  map,
  exhaustMap,
  mergeMap,
  of,
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
    // projects each value into an Observable and subscribes to it. The operator is always subscribed to only one inner Observable so if the source Observable emits values faster they're buffered inside concatMap()
    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(
      takeUntil(timer(3000)),
      concatMap((ev) => interval(1000).pipe(take(3)))
    );
    result.subscribe((x) => console.log(x));
  }
}

export function operatorExhaustAll() {
  if (handleClick('exhaustAll')) {
    // Flattens an Observable-of-Observables by dropping the next inner Observables while the current inner is still executing
    const clicks = fromEvent(document, 'click');
    const higherOrder = clicks.pipe(
      takeUntil(timer(3000)),
      map(() => interval(1000).pipe(take(5)))
    );
    const result = higherOrder.pipe(exhaustAll());
    result.subscribe((x) => console.log(x));
  }
}

export function operatorExhaustMap() {
  if (handleClick('exhaustMap')) {
    // Projects each source value to an Observable which is merged in the output Observable only if the previous projected Observable has completed
    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(
      takeUntil(timer(3000)),
      exhaustMap(() => interval(1000).pipe(take(5)))
    );
    result.subscribe((x) => console.log(x));
  }
}

export function operatorMap() {
  if (handleClick('map')) {
    // Like Array.prototype.map(), it passes each source value through a transformation function to get corresponding output values
    const clicks = fromEvent<PointerEvent>(document, 'click');
    const positions = clicks.pipe(
      takeUntil(timer(3000)),
      map((ev) => ev.clientX)
    );
    positions.subscribe((x) => console.log(x));
  }
}

export function operatorPluck() {
  if (handleClick('pluck')) {
    // Maps each source value to its specified nested property
    const clicks = fromEvent(document, 'click');
    // Deprecation note: Use map and optional chaining: pluck('foo', 'bar') is map(x => x?.foo?.bar)
    // const tagNames = clicks.pipe(pluck('target', 'tagName'));
    const tagNames = clicks.pipe(
      takeUntil(timer(5000)),
      map((x: any) => x?.target?.tagName)
    );

    tagNames.subscribe((x) => console.log(x));
  }
}

export function operatorMergeMap() {
  if (handleClick('mergeMap')) {
    // Maps each value to an Observable, then flattens all of these inner Observables using mergeAll.
    const letters = of('a', 'b', 'c');
    const result = letters.pipe(
      mergeMap((x) =>
        interval(1000).pipe(
          take(4),
          map((i) => x + i)
        )
      )
    );

    result.subscribe((x) => console.log(x));
    // Results in the following:
    // a0
    // b0
    // c0
    // a1
    // b1
    // c1
    // continues to list a, b, c every second with respective ascending integers
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
