import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('redefining-the-web', 'Integration | Component | redefining the web', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{redefining-the-web}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#redefining-the-web}}
      template block text
    {{/redefining-the-web}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
