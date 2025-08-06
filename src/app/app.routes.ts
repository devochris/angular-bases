import { Routes } from '@angular/router';
import { Counter } from './pages/counter/counter';
import { Hero } from './pages/hero/hero';
import { DragonBallPage } from './pages/dragon-ball-page/dragon-ball-page';
import { DragonBallSuperPage } from './pages/dragon-ball-super-page/dragon-ball-super-page';

export const routes: Routes = [
  {
    path: '',
    component: Counter
  },
  {
    path: 'hero',
    component: Hero
  },
  {
    path: 'dragon-ball',
    component: DragonBallPage
  },
  {
    path: 'dragon-ball-super',
    component: DragonBallSuperPage
  },
  {
    path: '**',
    redirectTo: ''
  }
];
