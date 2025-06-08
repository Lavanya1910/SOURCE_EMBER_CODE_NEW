import Component from '@glimmer/component';
import { action } from '@ember/object';
import { debounce } from '@ember/runloop';

export default class SearchFieldComponent extends Component {
  @action
  handleInput(event) {
    // Get the search query from the input field
    const query = event.target.value;

    // Call the search action provided by the parent component
    this.args.search(query);
  }
}
