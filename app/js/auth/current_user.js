/*@ngInject*/
function CurrentUser(User, Headers) {
  let currentUser;

  return {
    retrieve() { return currentUser; },
    create(data) {
      User.find(data.uid)
        .then((user) => {
          currentUser = user;
          Headers.setAuthorization(data.token);
        });
    },
    destroy() {
      currentUser = undefined;
      Headers.resetAuthorization();
    }
  };
}

export default CurrentUser;
