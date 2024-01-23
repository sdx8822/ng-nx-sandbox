import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SortingService } from '@ng-nx-sandbox/shared-libs';

@Component({
  selector: 'ng-nx-sandbox-select-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-dropdown.component.html',
  styleUrl: './select-dropdown.component.scss',
})
export class SelectDropdownComponent implements OnInit {
  /**
   * What is the importance or purpose of this call to action?
   */
  @Input()
  theme: 'primary' | 'secondary' | 'accent' | 'bordered' | 'ghost' = 'bordered';

  private _themeMap = {
    primary: 'select-primary',
    secondary: 'select-secondary',
    accent: 'select-accent',
    bordered: 'select-bordered',
    ghost: 'select-ghost'
  }

  /**
   * What is the state of the dropdown? The state overrides the base theme.
   */
  @Input()
  state?: 'info' | 'success' | 'error' | 'warning';

  private _stateMap = {
    info: 'select-info',
    success: 'select-success',
    error: 'seelct-error',
    warning: 'select-warning'
  };

  /**
   * Is the dropdown disabled?
   */
  @Input()
  isDisabled = false;

  /**
   * How large should the dropdown be?
   */
  @Input()
  size: 'xs' | 'sm' | 'md' | 'lg' = 'xs';

  private _sizeMap = {
    xs: 'select-xs',
    sm: 'select-sm',
    md: 'select-md',
    lg: 'select-lg'
  };

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Select an item';

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

  public get classes(): string[] {
    let classList = [
      'select',
      this._sizeMap[this.size],
      this._themeMap[this.theme],
    ];

    if (this.isDisabled) {
      classList = [...classList, 'select-disabled'];
    }

    if (this.state) {
      classList = [...classList, this._stateMap[this.state]];
    }

    return classList;
  }
}
