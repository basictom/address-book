app.controller("AddressController", function($scope, AddressFactory) {

  $scope.address = [];


  let getItems = () => {
    AddressFactory.addressList().then((addresses) => {
      $scope.address = addresses;
    }).catch((error) => {
      console.log("get error", error);
    });
  };

  getItems();


});
