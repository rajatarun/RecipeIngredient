import {Component, Input, OnInit} from '@angular/core';
import {RecipeService} from '../recipe.service';
import {NgbTooltipConfig} from '@ng-bootstrap/ng-bootstrap';
import {Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.css'],
  providers: [RecipeService, NgbTooltipConfig]
})
export class ViewRecipeComponent implements OnInit {
  @Input() recipes;
  ingredient = '';
  navIsFixed: boolean;
  constructor(private recipeService: RecipeService, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.recipes = [];
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!(window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100)) {
      if (this.navIsFixed && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
        this.navIsFixed = false;
      }
    } else {
      this.navIsFixed = true;
    }
  }
  scrollToTop() {
    (function smoothscroll() {
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 5));
    }
  })();
  }
}
