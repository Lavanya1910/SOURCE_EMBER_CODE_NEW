import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class MyTableComponent extends Component {
  @tracked sortedData = []; // Tracked property to store sorted data
  @tracked sortBy = ''; // Tracked property to store current sorting column
  @tracked sortOrder = 'asc'; // Tracked property to store sorting order

  // Sorts the data based on the specified column
  sortData(column) {
    if (this.sortBy === column) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc'; // Toggle sorting order if same column clicked
    } else {
      this.sortBy = column;
      this.sortOrder = 'asc'; // Reset sorting order if different column clicked
    }

    // Sorting logic based on column and order
    this.sortedData = this.args.data.sort((a, b) => {
      if (this.sortOrder === 'asc') {
        return a[column] > b[column] ? 1 : -1;
      } else {
        return a[column] < b[column] ? 1 : -1;
      }
    });
  }
}
