myApp.controller("AddressApp", function($scope, AddressFactory){
  $scope.addresses = [];

  let getAddr = () => {
    AddressFactory.getAddress().then((addr) => {
      console.log("addresses", addr);
    }).catch((error) => {
      console.log("get adr error", error);
    });
  };
  getAddr();





});
