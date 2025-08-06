import { Component, input } from '@angular/core';
import { Character } from '../../../interfaces/character';

@Component({
  selector: 'dragon-ball-character-list',
  templateUrl: './character-list.html'
})
export class CharacterList {
  characters = input.required<Character[]>();
  listName = input.required<string>();
}
