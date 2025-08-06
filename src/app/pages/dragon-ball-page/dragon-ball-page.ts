import { Component, signal } from '@angular/core';
import { Character } from '../../interfaces/character';

@Component({
  imports: [
    // NgClass
  ],
  templateUrl: './dragon-ball-page.html'
})
export class DragonBallPage {
  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    // { id: 2, name: 'Vegetta', power: 8000 },
    // { id: 3, name: 'Yamcha', power: 500 },
    // { id: 4, name: 'Piccolo', power: 3000 },
  ]);

  // powerClass = computed(() => {
  //   return {
  //     'text-danger': true
  //   };
  // });

  addCharacter(): void {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    };

    this.characters.update((list) => [...list, newCharacter]);
  }
}
