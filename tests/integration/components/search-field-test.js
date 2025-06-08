import { module, test } from 'qunit';
import { setupRenderingTest } from 'c3-migration/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | search-field', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<SearchField />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <SearchField>
        template block text
      </SearchField>
    `);

    assert.dom().hasText('template block text');
  });
});
