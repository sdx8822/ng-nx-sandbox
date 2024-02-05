import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ng-nx-sandbox-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  /**
   * What is the importance or purpose of this call to action?
   */
  @Input()
  theme: 'primary' | 'secondary' | 'accent' | 'neutral' | 'ghost' | 'link' = 'secondary';

  private _themeMap = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
    neutral: 'btn-neutral',
    ghost: 'btn-ghost',
    link: 'btn-link'
  }

  /**
   * Is the button disabled?
   */
  @Input()
  isDisabled = false;

  /**
   * What is the state of the button? The state overrides the base theme.
   */
  @Input()
  state?: 'info' | 'success' | 'error' | 'warning';

  private _stateMap = {
    info: 'btn-info',
    success: 'btn-success',
    error: 'btn-error',
    warning: 'btn-warning'
  };

  /**
   * How large should the button be?
   */
  @Input()
  size: 'xs' | 'sm' | 'md' | 'lg' = 'xs';

  private _sizeMap = {
    xs: 'btn-xs',
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg'
  };

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  /**
   * Optional click handler
   */
  @Output()
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  onClick = new EventEmitter<Event>();

  // Do not create dynamic classes or they won't render
  public get classes(): string[] {
    let classList = [
      'btn',
      'rounded-full',
      this._sizeMap[this.size],
      this._themeMap[this.theme],
    ];

    if (this.isDisabled) {
      classList = [...classList, 'btn-disabled'];
    }

    if (this.state) {
      classList = [...classList, this._stateMap[this.state]];
    }

    return classList;
  }
}