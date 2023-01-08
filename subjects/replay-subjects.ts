import { ReplaySubject } from 'rxjs';

export function replaySubjects() {
  const subject = new ReplaySubject(2);

  subject.next('first message');
  subject.next('second message');

  // the feature of Replay Subject is that its subscriptions receive the specific number of the last emitted values (in this case it is the last 2 emitted values - 'first message', 'second message') and all other values that were emitted after the creation of this subscription
  const sub1 = subject.subscribe({
    next: (message) => console.log('sub1: ' + message),
    error: (error) => console.log(error),
    complete: () => console.log('Completed'),
  });

  subject.next('third message');
  subject.next('fourth message');
  sub1.unsubscribe();

  const replaySub = new ReplaySubject(50, 200);

  // Replay subject with specific buffered-time
  // subscription will get last 50 emitted values (or as many as there are, if there are not 50)
  // 200ms is buffered-time: subscription will get last 50 emitted values, but only those values that were emitted 200ms before its creations

  let i = 0;
  const interval = setInterval(() => {
    console.log('i=' + i);
    replaySub.next(i++);
  }, 100);
  setTimeout(() => {
    const sub2 = replaySub.subscribe({
      next: (x) => console.log('sub2: ' + x),
    });
    clearInterval(interval);
    sub2.unsubscribe();
  }, 500);
}
