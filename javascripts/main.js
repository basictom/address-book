app.controller("AddressController", function($q, $http, $scope, AddressFactory, FIREBASE_CONFIG) {

  $scope.address = [];


  let getItems = () => {
    AddressFactory.addressList().then((addresses) => {
      $scope.address = addresses;
    }).catch((error) => {
      console.log("get error", error);
    });
  };

  getItems();


  $scope.addNew = () => {
    console.log("click");
  AddressFactory.postNewAddress($scope.newAddress)
  .then((returns) => {
    console.log("add new", returns);
    $scope.newAddress = {};
    getItems();
    //switch views here
  }).catch((error) => {
    console.log("Add error", error);
  });
};


});
