import { Component, computed, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  templateUrl: './hero.html',
  imports: [
    UpperCasePipe
  ]
})
export class Hero {
  name = signal('Iron-Man');
  age = signal(45);

  heroDescription = computed(() => `${this.name()} - ${this.age()}`);
  //capitalizedName = computed(() => this.name().toUpperCase());

  changeHero(): void {
    this.name.set('Spider-Man');
    this.age.set(22);
  }

  changeAge(): void {
    this.age.set(60);
  }

  resetForm(): void {
    this.name.set('Iron-Man');
    this.age.set(45);
  }
}
