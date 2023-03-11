import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-logo-componente',
  templateUrl: './logo-componente.component.html',
  styleUrls: ['./logo-componente.component.scss'],
})
export class LogoComponenteComponent implements OnInit {
  currentState = 'start';
  colors = ['#5B21B6', '#6D28D9', '#7C3AED', '#4C1D95'];
  
  pathColor = [
    '#5B21B6',
    '#5B21B6',
    '#5B21B6',
    '#5B21B6',
    '#5B21B6',
    '#5B21B6',
    '#5B21B6',
    '#5B21B6',
    '#5B21B6',
  ]

  ngOnInit(): void {
    this.setColors()
    setInterval(() => this.setColors(), 1500);
  }

  setColors(): void {
    this.pathColor = this.pathColor.map(() => this.colors[Math.floor(Math.random() * this.colors.length)])
  }
}
