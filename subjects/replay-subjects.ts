import { ReplaySubject } from 'rxjs';

export function replaySubjects() {
  const subject = new ReplaySubject(2);

  subject.next('first message');
  subject.next('second message');

  // the feature of Replay Subject is that its subscriptions receive the specific number of the last emitted values (in this case it is the last 2 emitted values - 'first message', 'second message') and all other values that were emitted after the creation of this subscription
  const subscription = subject.subscribe({
    next: (message) => console.log(message),
    error: (error) => console.log(error),
    complete: () => console.log('Completed'),
  });

  subject.next('third message');
  subject.next('fourth message');
  subscription.unsubscribe();
}
