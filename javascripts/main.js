app.controller("AddressController", function($q, $http, $scope, AddressFactory, FIREBASE_CONFIG) {

  $scope.address = [];


  let getAddresses = () => {
    AddressFactory.addressList().then((addresses) => {
      $scope.address = addresses;
    }).catch((error) => {
      console.log("get error", error);
    });
  };

  getAddresses();


  $scope.addNew = () => {
    console.log("click");
  AddressFactory.postNewAddress($scope.newAddress)
    .then((returns) => {
      console.log("add new", returns);
      $scope.newAddress = {returns};
      console.log($scope.newAddress);
      getAddresses();
    }).catch((error) => {
      console.log("Add error", error);
    });
  };

  $scope.deleteAddress = (id) => {
    console.log("delete", id);
    AddressFactory.deleted(id).then(() => {
      getAddresses();
    }).catch((error) => {
      console.log("delete", error);
    });
  };


});
