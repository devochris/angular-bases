import { Component } from '@angular/core';
import { Navbar } from './components/shared/navbar/navbar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    RouterOutlet
  ],
  templateUrl: './app.html'
})
export class App {}
