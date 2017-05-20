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
  AddressFactory.postNewAddress($scope.newAddress)
    .then((returns) => {
      $scope.newAddress = {returns};
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
