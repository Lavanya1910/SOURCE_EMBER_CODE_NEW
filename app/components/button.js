/* eslint-disable prettier/prettier */
import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class MyButtonComponent extends Component {
  // Public properties
  disabled = false;

  // Action to handle button click
  @action
  onClick() {
    if (!this.disabled && this.args.onClick) {
      this.args.onClick();
    }
  }
}
