import { Component, OnInit } from '@angular/core';
import {
  Observable,
  Subject,
  concatMap,
  from,
  fromEvent,
  map,
  of,
  range,
  switchMap,
} from 'rxjs';
import { IRealPriceProduct, listProducts } from './mock/observable.mock';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
})
export class ObservableComponent implements OnInit {
  ngOnInit(): void {
    // this.myFirstObservable();
    // this.counterInterval();
    // this.unsubscribeObservable()
    // this.subjects();
    // this.operatorOf();
    // this.operatorFrom();
    // this.operatorOfAndMapExample();
    // this.operatorFromEvent();
    // this.operatorConcatMap();
    // this.operatorSwitchMap();
  }

  private myFirstObservable() {
    const myObservable$ = new Observable<string>((subscriber) => {
      subscriber.next('this is my message');
    });

    myObservable$.subscribe({
      next: (value) => {
        console.log('value subscription ->', value);
      },
    });
  }

  private counterInterval() {
    const myObservable$ = new Observable<number>((subscriber) => {
      let counter = 0;
      const interval = setInterval(() => {
        counter += 1;
        subscriber.next(counter);
        console.log('counter ->', counter);
      }, 1000);

      // the observable can return anything
      // if you not finish the process the setInterval will continue work
      return () => {
        clearInterval(interval);
      };
    });

    const mySubscription = myObservable$.subscribe({
      next: (value) => {
        console.log('value subscription ->', value);
      },
    });

    setTimeout(() => {
      // unsubscribe an observer does not cause it to finished its processes
      mySubscription.unsubscribe();
    }, 3000);
  }

  private unsubscribeObservable() {
    const myObservable$ = new Observable<number>((subscriber) => {
      let counter = 0;
      const interval = setInterval(() => {
        counter += 1;
        subscriber.next(counter);
        console.log('counter ->', counter);
      }, 1000);

      setTimeout(() => {
        subscriber.complete();
      }, 2500);

      return () => {
        clearInterval(interval);
      };
    });

    const sub1 = myObservable$.subscribe({
      next: (value) => {
        console.log('value subscription ->', value);
      },
    });

    const sub2 = myObservable$.subscribe({
      next: (value) => {
        console.log('value subscription ->', value);
      },
    });

    sub1.add(sub2);

    setTimeout(() => {
      sub1.unsubscribe();
    }, 3000);
  }

  private subjects() {
    const observable$ = new Observable<number>((subscriber) => {
      const interval = setInterval(() => {
        const random = Math.random();
        subscriber.next(random);
        console.log('random -->', random);
      }, 2000);

      return () => {
        clearInterval(interval);
      };
    });

    // The Subject have the multiple casting
    // is other Observer
    // have next, error, complete
    const subject$ = new Subject<number>();
    const observableSubscription = observable$.subscribe(subject$);

    // you can have multiple subscribers hearing the same observable
    subject$.subscribe((value) => console.log('subject 1 ->', value));
    subject$.subscribe((value) => console.log('subject 2 ->', value));

    // if you can see the logs, you will see different values
    // observable$.subscribe({
    //   next: (value) => {
    //     console.log('value subscription 3 ->', value);
    //   },
    // });

    // observable$.subscribe({
    //   next: (value) => {
    //     console.log('value subscription 4 ->', value);
    //   },
    // });

    setTimeout(() => {
      // when you add complete is only "const subject$ = new Subject<number>()"
      // the "observable$" continued working
      subject$.complete();

      //now the observable is unsubscribe now
      observableSubscription.unsubscribe();
    }, 4000);
  }

  private operatorOf() {
    // the operator "of" can receive any kind of values
    const numberObservable$ = of(1, 2, 3, 4, 5);

    // the of is the same to do this
    // const numberObservable$ = new Observable<number>((subscriber) => {
    //   subscriber.next(1)
    //   subscriber.next(2)
    //   subscriber.next(3)
    //   subscriber.next(4)
    //   subscriber.next(5)
    //   subscriber.complete()
    // })

    numberObservable$.subscribe((value) => console.log(value));
  }

  private operatorMap() {
    const numberObservable$ = of(1, 2, 3, 4, 5);

    const multipleObservers$ = numberObservable$.pipe(
      map((value) => value * 2)
    );

    multipleObservers$.subscribe((value) => console.log(value));
  }

  private operatorFrom() {
    const numberObservable$ = of(1, 2, 3, 4, 5);
    const numberObservableFrom$ = from([1, 2, 3, 4, 5]);

    //

    numberObservable$.subscribe((value) =>
      console.log('values by OF -->', value)
    );

    numberObservableFrom$.subscribe((value) =>
      console.log('values by from -->', value)
    );
  }

  private operatorOfAndMapExample() {
    const numberObservable$ = of(listProducts);

    numberObservable$
      .pipe(
        // the objective of map is transform the type od the date
        map((products) => {
          const mewFormatProductsList: IRealPriceProduct[] = products.map(
            (product) => {
              //calculate the IVA (tax) - (example)
              const iva = product.price * 0.16;
              const realPrice = product.price + iva;

              return {
                ...product,
                realPrice: Number(realPrice.toFixed(2)),
              };
            }
          );

          return mewFormatProductsList;
        })
      )
      .subscribe((products) => console.log('products -->', products));
  }

  private operatorFromEvent() {
    const subscribe1$ = fromEvent<MouseEvent>(document, 'click');
    const subscribe2$ = fromEvent<KeyboardEvent>(document, 'keyup');

    subscribe1$.subscribe((event) => console.log('event click -->', event));

    subscribe2$.subscribe((event) => console.log('event keyup -->', event.key));
  }

  private operatorRange() {
    // it will be removed lol xd
    const observable$ = range(1, 5);

    // five values
    observable$.subscribe((value) => console.log('value:', value));
  }

  private operatorConcatMap() {
    //is to simulate a http request
    const simulateRequest = (user: string) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(`hi user: ${user}`);
        }, 1000);
      });
    };

    const observableUserList$ = from<string[]>(['user 1', 'user 2', 'user 3']);

    //the concatMap can be async
    const detailsUser$ = observableUserList$.pipe(
      concatMap((user) => simulateRequest(user))
    );

    detailsUser$.subscribe((values) => console.log(values));
  }

  private operatorSwitchMap() {
    //that operator is useful when the user find a data
    //for example one search web:

    //the switchMap return other observables
    // that example is bad
    // const observableSwitch$ = of(1,2,3).pipe(switchMap(value => value * 2))
    //example true
    // the switchMap create a observer peer each value
    const observableSwitch$ = of(1, 2, 3).pipe(
      switchMap((value) => of(value).pipe(map((value) => value * 2)))
    );

    observableSwitch$.subscribe((value) => console.log('switchMap -->', value));
  }
}
