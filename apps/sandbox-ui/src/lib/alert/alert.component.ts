import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ng-nx-sandbox-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
})
export class AlertComponent {
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
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'This is an alert message!';

  /**
   * Optional click handler
   */
  @Output()
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  onClick = new EventEmitter<Event>();

  // Do not create dynamic classes or they won't render
  public get classes(): string[] {
    let classList = [
      'btn'
    ];

    if (this.state) {
      classList = [...classList, this._stateMap[this.state]];
    }

    return classList;
  }
}
