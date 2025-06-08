import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class UserMgmtComponent extends Component {
  @tracked searchValue = '';
  @tracked showResults = false;

  get disabled() {
    return this.searchValue === '';
  }

  @action
  onClick() {
    console.log('Search value:', this.searchValue);
    alert('You clicked the Search User button!');
    // Perform your search logic here and update showResults accordingly
    // For now, let's simulate showing results after a delay
    setTimeout(() => {
      this.showResults = true;
    }, 1000);
  }
}
