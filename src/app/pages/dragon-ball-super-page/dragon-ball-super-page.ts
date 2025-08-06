import { Component, inject } from '@angular/core';
import { DragonBallAdder } from '../../services/dragon-ball-adder';
import { CharacterAdd } from '../../components/dragon-ball/character-add/character-add';
import { CharacterList } from '../../components/dragon-ball/character-list/character-list';

@Component({
  imports: [
    CharacterAdd,
    CharacterList
  ],
  templateUrl: './dragon-ball-super-page.html',
})
export class DragonBallSuperPage {
  dragonBallAdder = inject(DragonBallAdder);
}
