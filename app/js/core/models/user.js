/*@ngInject*/
function User(DS) {
  return DS.defineResource({
    name: 'user',
    endpoint: 'users',
    methods: {
      name: function () {
        /* jshint camelcase: false */
        return `${this.first_name} ${this.last_name}`;
      }
    }
  });
}

export default User;
