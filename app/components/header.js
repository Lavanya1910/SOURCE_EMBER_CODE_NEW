import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class HeaderComponent extends Component {
  @service router;

  @action
  refreshApp() {
    window.location.href = '/';
  }
}
