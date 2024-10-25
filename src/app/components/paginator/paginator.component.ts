import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'paginator',
  templateUrl: 'paginator.component.html',
  styleUrls: ['paginator.component.scss'],
})
export class PaginatorComponent {
  @Input() public set paginatorSize(newPaginatorSize: number) {
    this.pages = Array.from({ length: newPaginatorSize }, (_, i) => i + 1);
  }
  @Output() public changeSelectedPage = new EventEmitter<number>();

  public pages: number[];
  public activePage: number;

  constructor() {
    this.pages = [];
    this.activePage = 1;
  }

  public emitSelectedPage(page: number): void {
    this.activePage = page;
    this.changeSelectedPage.emit(page);
  }

  public clickPreviusPage(): void {
    if (this.activePage > 1) {
      this.emitSelectedPage(this.activePage - 1);
    }
  }

  public clickNextPage(): void {
    if (this.activePage < this.pages.length) {
      this.emitSelectedPage(this.activePage + 1);
    }
  }
}
