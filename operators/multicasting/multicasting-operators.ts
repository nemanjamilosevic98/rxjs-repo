import { interval, tap, map, take, share } from 'rxjs';

export function operatorShare() {
  if (handleShareClick()) {
    // Returns a new Observable that multicasts (shares) the original Observable. As long as there is at least one Subscriber this Observable will be subscribed and emitting data. When all subscribers have unsubscribed it will unsubscribe from the source Observable. Because the Observable is multicasting it makes the stream hot. This is an alias for multicast(() => new Subject()), refCount()

    // Generate new multicast Observable from the source Observable value
    const source = interval(1000).pipe(
      tap((x) => console.log('Processing: ', x)),
      map((x) => x * x),
      take(6),
      share()
    );

    source.subscribe((x) => console.log('subscription 1: ', x));
    source.subscribe((x) => console.log('subscription 2: ', x));
  }
}

function handleShareClick() {
  const descriptionElem = document.getElementById(
    'multicasting-share-description'
  );
  if (descriptionElem.style.display === 'none') {
    console.log('%c Join-Creation Operator share:', 'color:#add929');
    descriptionElem.style.display = 'block';
    return true;
  } else {
    descriptionElem.style.display = 'none';
  }
  return false;
}
