'use strict';

function Session(store) {
  let uid = () =>
    store.get('session').uid;

  let token = () =>
    store.get('session').token;

  let isAuthenticated = () =>
    store.get('session');

  return {
    create({ user, token }) {
      store.set('session', { uid: user.id, token: token });

      return uid();
    },
    destroy() {
      store.remove('session');
    },
    get isAuthenticated() { return isAuthenticated(); },
    get uid() { return uid(); },
    get token() { return token(); }
  };
}

Session.$inject = ['store'];

module.exports = Session;
