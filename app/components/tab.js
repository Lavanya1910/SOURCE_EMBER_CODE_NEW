import Component from '@ember/component';
import { actions } from '@ember/object';

export default Component.extend({
  activeTab: 'barea',

  actions: {
    openTab(tabName) {
      this.set('activeTab', tabName);
    },

    selectBusinessSegment(event) {
      let selectedSegment = event.target.value;
      console.log('Selected Business Segment:', selectedSegment);
    },
  },
});
