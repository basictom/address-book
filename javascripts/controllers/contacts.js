app.controller("AddressController", function($scope, AddressFactory, FIREBASE_CONFIG) {

  $scope.address = [];


  let getAddresses = () => {
    AddressFactory.addressList().then((addresses) => {
      $scope.address = addresses;
      $scope.showForm = false;
    }).catch((error) => {
      console.log("get error", error);
    });
  };

  getAddresses();

  $scope.deleteAddress = (id) => {
    console.log("delete", id);
    AddressFactory.deleted(id).then(() => {
      getAddresses();
    }).catch((error) => {
      console.log("delete", error);
    });
  };

});
