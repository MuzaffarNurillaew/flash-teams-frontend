import { Injectable } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {
  constructor(public router: Router, public route: ActivatedRoute) { }

  navigateToReturnUrl(defaultUrl: string = "/") {
    return this.router.navigate([this.route.snapshot.queryParams["returnUrl"] || defaultUrl]);
  }

  navigateToUrl(url: string, queryParams: any = {}) {
    return this.router.navigate([url], { queryParams: queryParams });
  }

  getQueryParam(param: string) {
    return this.route.snapshot.queryParamMap.get(param);
  }

  getRouteParam(param: string) {
    return this.route.snapshot.paramMap.get(param);
  }
}
