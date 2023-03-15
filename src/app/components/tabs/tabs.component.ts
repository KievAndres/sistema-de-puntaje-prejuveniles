import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tab } from '../../../types/custom-types';

@Component({
  selector: 'tabs',
  templateUrl: 'tabs.component.html',
  styleUrls: ['tabs.component.scss'],
})
export class TabsComponent {
  @Input() public tabs: Tab[] = [];
  @Output() tabSelected = new EventEmitter<Tab>();

  public onClickTab(clickedTab: Tab): void {
    this.tabs = this.tabs.map<Tab>(tab => {
      tab.esActivo = tab.nombre === clickedTab.nombre;
      return tab;
    })
    this.tabSelected.emit(clickedTab);
  }
}
