import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchService } from '../../services/search.service'; // ✅ Correct path

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule], // ✅ Only modules/components here
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  isMobileNavOpen = false;

  constructor(private searchService: SearchService) {}

  onSearch(term: string) {
    this.searchService.setSearchTerm(term.trim());
  }
}
