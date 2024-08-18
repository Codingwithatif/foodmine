import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchTerm: any;

  constructor(activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.params.subscribe((params) => {

      //no mention
      if (params.searchTerm) this.searchTerm = this.searchTerm;
    });
  }
  
  search(term: String): void {
    if (term) {
      this.router.navigateByUrl('/search/' + term);
    } else {
      this.router.navigate(['/']);
    }
  }
}
