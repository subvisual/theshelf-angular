function SessionStorage(store) {
  return {
    create(sessionData) {
      store.set('session', sessionData);
      return sessionData;
    },
    destroy() { store.remove('session'); },
    retrieve() { return store.get('session'); }
  };
}

SessionStorage.$inject = ['store'];

module.exports = SessionStorage;
