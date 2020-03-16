import { BehaviorSubject, Observable } from 'rxjs';

abstract class BaseStore<T> {

  protected abstract store: string;

  protected bs: BehaviorSubject<T>;
  state$: Observable<T>;
  state: T;
  previous: T;
  useLocalStorage: boolean;

  constructor(props: Partial<T>, useLocalStorage: boolean = false) {
    this.bs = new BehaviorSubject<T>(props as unknown as T);
    this.state$ = this.bs.asObservable();
    this.useLocalStorage = useLocalStorage;

    this.state = props as unknown as T;
    this.previous = this.state as T;
    this.state$.subscribe(s => {
      this.state = s;

      if (this.useLocalStorage && this.store) {
        // LocalStore.set(this.key, this.state);
      }
    });
  }

  get key() {
    return `__teqnical__${this.store}`;
  }

  patch(newValue: Partial<T>) {
    this.previous = this.state;

    const newState = Object.assign({}, this.state, newValue);
    this.bs.next(newState);
  }

  set(newValue: Partial<T>) {
    this.previous = this.state;
    const newState = Object.assign({}, newValue) as T;
    this.bs.next(newState);
  }
}

export default BaseStore;
