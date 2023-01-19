import { Subject } from 'rxjs';

export function subjects() {
  console.log('%c Subjects:', 'color:#add929');
  const subject = new Subject();

  subject.next('first message');

  const subscription = subject.subscribe({
    next: (message) => console.log(message),
    error: (error) => console.log(error),
    complete: () => console.log('Completed'),
  });

  // subscription will get only those values that were emitted after its creation
  // 'first message' will not be printed
  subject.next('second message');
  subject.next('third message');

  subscription.unsubscribe();
}
