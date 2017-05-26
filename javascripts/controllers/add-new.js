app.controller("NewContactCtrl", function($q, $http, $scope, AddressFactory, FIREBASE_CONFIG) {

  // $scope.addNewClick = () => {
  //
  // }

  $scope.addNew = () => {
  AddressFactory.postNewAddress($scope.newAddress)
    .then((returns) => {
      $scope.newAddress = {returns};
      getAddresses();
    }).catch((error) => {
      console.log("Add error", error);
    });
  };

});
