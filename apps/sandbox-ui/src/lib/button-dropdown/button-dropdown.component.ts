import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SortingService } from '@ng-nx-sandbox/shared-services';

@Component({
  selector: 'ng-nx-sandbox-button-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-dropdown.component.html',
  styleUrl: './button-dropdown.component.scss',
})
export class ButtonDropdownComponent implements OnInit {

  /**
   * What should we label the button dropdown?
   */
  @Input()
  btnLabel = 'Dropdown'

  /**
   * What options should the dropdown consist of?
   *
   * @required
   */
  @Input()
  items: string[] | object[] | number[] = [];

  /**
   * If items are not primitive types, how should we display the labels?
   */
  @Input()
  optionLabel?: string;

  /**
   * If items are not primitive types, how should we save the values?
   */
  @Input()
  optionValue?: string;

  /**
   * Optional click handler
   */
  @Output()
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  onClick = new EventEmitter<Event>();

  ngOnInit(): void {
      this._checkItemsType();

      if (this._checkItemsType() === 'object') {
        this._createLabels();
      }
  }

  private _checkItemsType(): string {
    return typeof this.items;
  }

  private _createLabels(): void {
    let newItemsList: never[] = [];

    this.items.forEach((item) => {
      if (this.optionLabel) {
        newItemsList = <never>[...newItemsList, item[<never>this.optionLabel]];
      }
    });

    this.items = [...newItemsList];
    this.items = SortingService.sortStringArray(<never>this.items);
  }
}
