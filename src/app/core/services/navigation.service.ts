import { Injectable } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor(private router: Router, private route: ActivatedRoute) { }

  navigateToReturnUrl(defaultUrl: string = "/") {
    return this.router.navigate([this.route.snapshot.queryParams["returnUrl"] || defaultUrl]);
  }

  navigateToUrl(url: string) {
    return this.router.navigate([url]);
  }
}
