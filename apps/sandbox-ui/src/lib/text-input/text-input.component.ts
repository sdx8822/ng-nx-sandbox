import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ng-nx-sandbox-text-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss',
})
export class TextInputComponent {
  /**
   * What is the importance or purpose of this call to action?
   */
  @Input()
  theme: 'primary' | 'secondary' | 'accent' | 'bordered' | 'ghost' = 'secondary';

  private _themeMap = {
    primary: 'input-primary',
    secondary: 'input-secondary',
    accent: 'input-accent',
    bordered: 'input-bordered',
    ghost: 'input-ghost'
  }

  /**
   * What is the state of the text input? The state overrides the base theme.
   */
  @Input()
  state?: 'info' | 'success' | 'error' | 'warning';

  private _stateMap = {
    info: 'input-info',
    success: 'input-success',
    error: 'input-error',
    warning: 'input-warning'
  };

  /**
   * How large should the text input box be?
   */
  @Input()
  size: 'xs' | 'sm' | 'md' | 'lg' = 'xs';

  private _sizeMap = {
    xs: 'input-xs',
    sm: 'input-sm',
    md: 'input-md',
    lg: 'input-lg'
  };

  /**
   * Should there be some instructions in an empty input box?
   */
  @Input()
  placeholder = 'Enter a text.';

  /**
   * Should the input field be disabled?
   */
  @Input()
  isDisabled = false;

  /**
   * Optional click handler
   */
  @Output()
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  onClick = new EventEmitter<Event>();

  // Do not create dynamic classes or they won't render
  public get classes(): string[] {
    let classList = [
      'input',
      'rounded-full',
      this._sizeMap[this.size],
      this._themeMap[this.theme],
    ];

    if (this.state) {
      classList = [...classList, this._stateMap[this.state]];
    }

    return classList;
  }
}
