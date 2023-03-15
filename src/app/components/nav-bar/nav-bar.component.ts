import { Component, Input, OnInit } from '@angular/core';
import { routes } from 'src/app/app-routing.module';
import { Router } from '@angular/router';
import { NavRoute } from 'src/types/custom-types';
import { getPathDescriptionValue } from 'src/utils/enum';

@Component({
  selector: 'nav-bar',
  templateUrl: 'nav-bar.component.html',
  styleUrls: ['nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  public navRoutes: NavRoute[];
  public titulo: string;
  
  constructor(private router: Router) {
    this.navRoutes = [];
    this.titulo = '';
  }

  public ngOnInit(): void {
    // console.log(this.router.url);
    this.navRoutes = routes
      .filter(route => route.path)
      .map<NavRoute>(route => {
        const path = `/${route.path}`;
        const isActive = this.router.url === path;
        const title = getPathDescriptionValue(route.path!);
        if (isActive) this.titulo = title;
        return {
          path,
          isActive: isActive,
          title
        }
      })
  }
}
