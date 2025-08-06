import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
  counter = 10;
  counterSignal = signal(10);

  constructor() {}

  increasedBy(value: number): void {
    this.counter += value;
    // this.counterSignal.set(this.counterSignal() + value);
    this.counterSignal.update((current) => current + value);
  }

  resetCounter(): void {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
