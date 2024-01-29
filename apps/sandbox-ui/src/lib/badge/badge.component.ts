import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ng-nx-sandbox-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
})
export class BadgeComponent {
  /**
   * What is the importance or purpose of this call to action?
   */
  @Input()
  theme: 'primary' | 'secondary' | 'accent' | 'neutral' | 'ghost' | 'outline' = 'secondary';

  private _themeMap = {
    primary: 'badge-primary',
    secondary: 'badge-secondary',
    accent: 'badge-accent',
    neutral: 'badge-neutral',
    ghost: 'badge-ghost',
    outline: 'badge-outline'
  }

  /**
   * What is the state of the text input? The state overrides the base theme.
   */
  @Input()
  state?: 'info' | 'success' | 'error' | 'warning';

  private _stateMap = {
    info: 'badge-info',
    success: 'badge-success',
    error: 'badge-error',
    warning: 'badge-warning'
  };

  /**
   * How large should the text input box be?
   */
  @Input()
  size: 'xs' | 'sm' | 'md' | 'lg' = 'xs';

  private _sizeMap = {
    xs: 'badge-xs',
    sm: 'badge-sm',
    md: 'badge-md',
    lg: 'badge-lg'
  };

  /**
   * Should there be some instructions in an empty input box?
   */
  @Input()
  label = 'Badge';

  /**
   * Should the input field be disabled?
   */
  @Input()
  isDisabled = false;

  /**
   * Should the input field be disabled?
   */
  @Input()
  asButton = false;

  /**
   * Optional click handler
   */
  @Output()
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  onClick = new EventEmitter<Event>();

  // Do not create dynamic classes or they won't render
  public get classes(): string[] {
    let classList = [
      'badge',
      this._sizeMap[this.size],
      this._themeMap[this.theme],
    ];

    if (this.state) {
      classList = [...classList, this._stateMap[this.state]];
    }

    return classList;
  }
}
