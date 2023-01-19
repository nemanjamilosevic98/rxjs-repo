import { BehaviorSubject } from 'rxjs';

export function behaviorSubjects() {
  console.log('%c Behavior Subjects:', 'color:#add929');
  const subject = new BehaviorSubject('Initial message');

  // the feature of Behavior Subject is that its subscriptions receive the last emitted value (in this case it is the initial value 'Initial message') and all other values that were emitted after the creation of this subscription
  const subscription = subject.subscribe({
    next: (message) => console.log(message),
    error: (error) => console.log(error),
    complete: () => console.log('Completed'),
  });
  subject.next('first message');
  subject.next('second message');
  subject.next('third message');

  subscription.unsubscribe();
}
