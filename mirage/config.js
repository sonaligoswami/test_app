export default function() {
  this.get('/services', function() {
    return {
      data: [
      {
        type: 'service',
        id: 1,
        attributes: {
          "name":"Unique Layouts",
          "img":"fa-lightbulb-o",
          "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
        }
      },
      {
        type: 'service',
        id: 2,
        attributes: {
          "name":"Responsive",
          "img":"fa-mobile",
          "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
        }
      },
      {
        type: 'service',
        id: 3,
        attributes: {
          "name":"Ajax Transitions",
          "icon":"fa-spinner",
          "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
        }
      },
      {
        type: 'service',
        id: 4,
        attributes: {
          "name":"E-Commerce",
          "icon":"fa-shopping-bag",
          "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
        }
      },
      {
        type: 'service',
        id: 5,
        attributes: {
          "name":"Unlimited Portfolios",
          "icon":"fa-th",
          "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
        }
      },
      {
        type: 'service',
        id: 6,
        attributes: {
          "name":"Powerful",
          "icon":"fa-bolt",
          "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
        }
      }
      ]
    };
  });

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
}
