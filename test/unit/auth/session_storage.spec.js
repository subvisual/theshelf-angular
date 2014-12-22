'use strict';

describe('Unit: Auth SessionStorage', function() {

  var SessionStorage, store;

  beforeEach(function() {
    module('theshelf.core');
    module('theshelf.auth');

    inject(function(_SessionStorage_, _store_) {
      SessionStorage = _SessionStorage_;
      store = _store_;
    });
  });

  describe('#create', function() {
    it('stores auth data in local storage', function() {
      var setStub = sinon.stub(store, 'set');
      var sessionData = { uid: 'userId', token: 's0meT0k3n' };

      SessionStorage.create(sessionData);

      expect(setStub).to.have.been.calledWith('session', sessionData);
    });

    it('returns the data stored', function() {
      var setStub = sinon.stub(store, 'set');
      var sessionData = { uid: 'userId', token: 's0meT0k3n' };

      var returnedData = SessionStorage.create(sessionData);

      expect(returnedData).to.deep.equal(sessionData);
    });
  });

  describe('#destroy', function() {
    it('removes auth data from local storage', function() {
      var removeStub = sinon.stub(store, 'remove');

      SessionStorage.destroy();

      expect(removeStub).to.have.been.calledWith('session');
    });
  });

  describe('#retrieve', function() {
    it('returns the stored session', function() {
      var session = 'mySession';
      var getStub = sinon.stub(store, 'get');
      getStub.withArgs('session').returns(session);

      var sessionRetrieved = SessionStorage.retrieve();

      expect(sessionRetrieved).to.equal(session);
    });

    it('tries to get the session from local storage', function() {
      var getStub = sinon.stub(store, 'get');

      SessionStorage.retrieve();

      expect(getStub).to.have.been.calledWith('session');
    });
  });
});
