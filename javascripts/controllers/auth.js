app.controller("AuthCtrl", function($rootScope, $scope, $location, FIREBASE_CONFIG, AuthFactory, UserFactory){
  $scope.alerts = [];
  // $scope.auth = {
  //   email: "a@a.com",
  //   password: "123456"
  // };

  if($location.path() === '/logout'){
    AuthFactory.logout();
    $rootScope.user = {};
    $location.url('/auth');
  }

  let logMeIn = () => {
    AuthFactory.authenticate($scope.auth).then((userCreds) => {
      // console.log("user creds", userCreds);
      return UserFactory.getUser(userCreds.uid);
    }, (error) => {
      $scope.alerts.push({msg: error.message});
    }).then((user) => {
      $rootScope.user = user;
      $location.url('/contacts');
    }).catch((error) => {
      console.log("get user error", error);
    });
  };

  $scope.registerUser = () => {

    AuthFactory.registerWithEmail($scope.auth)
    .then((didRegister) => {
      $scope.auth.uid = didRegister.uid;
      return UserFactory.addUser($scope.auth);
    }, (error) => {
      console.log("register error", error);
    }).then((registerComplete) => {
      console.log("registerComplete",registerComplete);
      $location.url('/contacts');
    }, (error) => {
      console.log("error", error);
    });
  };

  $scope.loginUser = () => {
    logMeIn();
  };


});
