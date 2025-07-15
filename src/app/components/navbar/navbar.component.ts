import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { SearchService } from '../../services/search.service';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  isMobileNavOpen = false;
  isHome = false;
  
  constructor(private searchService: SearchService, private router: Router) {
    this.router.events.subscribe(() => {
      this.isHome = this.router.url === '/';
    });
  }

  onSearch(term: string) {
    this.searchService.setSearchTerm(term.trim());
  }
}
