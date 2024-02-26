import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, CardComponent, CommonModule, RouterOutlet],
  template: `
  <h1>Aula de Services</h1>
  <p>Deixando o HTML no proprio TypeScript</p>
  <app-card></app-card>
  <router-outlet></router-outlet>`,
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'services-angular';
}
