import { Component, OnInit } from '@angular/core';
import { AsyncSubject, Observable, Subject, Subscription, concatMap, delay, map, mergeMap, of, shareReplay, switchMap } from 'rxjs';

@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.css']
})
export class ObserverComponent implements OnInit {

  obsNum = new Observable(
    (observer) => {
      setTimeout(() => {
        observer.next(1)
      }, 1000);
      setTimeout(() => {
        observer.next(2)
      }, 1000);
      setTimeout(() => {
        observer.next(3)
      }, 1000);
    }
  );

  obsAlph = new Observable(
    (observer) => {
      setTimeout(() => {
        observer.next('a')
      }, 1000);
      setTimeout(() => {
        observer.next('b')
      }, 1000);
      setTimeout(() => {
        observer.next('c')
      }, 1000);
    }
  );

  public obs!: Subscription;
  public obs2!: Subscription;
  subject = new Subject()

  // -------------- AsyncSubject -------------- 
  asyncSubject = new AsyncSubject();

  obsUsingCreate = new Observable((observer) => {
    setTimeout(() => {
      observer.next('1')
    }, 2000);
    setTimeout(() => {
      observer.next('2')
    }, 2000);
    observer.complete()
  })
  obsUsingCreate2 = new Observable((observer) => {
    observer.next('a')
    setTimeout(() => {
      observer.next('b')
    }, 1000);
    setTimeout(() => {
      observer.next('c')
    }, 2000);
    observer.complete()
  })
  ngOnInit(): void {
    this.obs = this.obsUsingCreate.subscribe((d) => {
      console.log(d)
    });
    this.obs2 = this.obsUsingCreate2.subscribe((d) => {
      console.log(d)
    });
    this.obs2.unsubscribe()

    // -------------- AsyncSubject -------------- 
    // Subscribe before
    this.subject.subscribe(x => console.log('before complete - subject', x))
    this.asyncSubject.subscribe(x => console.log('before complete - asyncSubject', x))

    this.subject.next('value 1');
    this.subject.next('value 2');
    this.subject.complete();
    this.subject.next('value 3');

    this.asyncSubject.next('value 1');
    this.asyncSubject.next('value 2');
    this.asyncSubject.complete();
    this.asyncSubject.next('value 3');

    // Subscribe after
    this.subject.subscribe(x => console.log('after complete - subject', x))
    this.asyncSubject.subscribe(x => console.log('after complete - asyncSubject', x))

    // this.obsNum.pipe(
    //   mergeMap(el => this.obsAlph.pipe(
    //     delay(2000),
    //     map(num => el +" "+ num)
    //   )
    //   )
    // ).subscribe(res => console.log(res));

    // this.obsNum.pipe(
    //   switchMap(el => this.obsAlph.pipe(
    //     delay(2000),
    //     map(num => el + " " + num)
    //   )
    //   )
    // ).subscribe(res => console.log(res));

    this.obsNum.pipe(
      concatMap(el => this.obsAlph.pipe(
        // delay(2000),
        map(num => el + " " + num)
      )
      )
    ).subscribe(res => console.log(res));
  }
}
