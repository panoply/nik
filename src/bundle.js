/* Stylesheet */
import './sass/styles.js';

/* Modules */
import m from 'mithril';

/* Views */
import Index from './views/index';

const root = document.getElementById('app');

//m.route.prefix('');
m.route(root, '/', {
  '/': {
    render() {
      return m(Index);
    }
  }
});
