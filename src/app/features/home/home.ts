import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero'; 
import { InfoTabsComponent } from './info-tabs/info-tabs';
import { NewsComponent } from './news/news';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, InfoTabsComponent, NewsComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {}
