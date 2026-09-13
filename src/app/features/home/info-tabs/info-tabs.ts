import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-tabs.html',
  styleUrl: './info-tabs.scss'
})
export class InfoTabsComponent {
  activeTab: string = 'presentacion'; 

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
