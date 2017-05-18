myApp.factory("AddressFactory", function($q, $http, FIREBASE_CONFIG){
console.log("lieahrwgierh");

  let getAddress = () => {
  let address = [];
  return $q((resolve, reject) => {
    $http.get(`${FIREBASE_CONFIG.databaseURL}/addresses.json`)
      .then((fbAddr) => {
        let addressCollect = fbAddr.data;
        console.log(addressCollect);
        if(addressCollect !== null){
          Object.keys(addressCollect).forEach((key) => {
            addressCollect[key].id=key;
            address.push(addressCollect[key]);
          });
        }
          resolve(address);
          resolve(fbAddr);
      }).catch((error) => {
        reject(error);
      });
    });
  };

  return {getAddress:getAddress};
});
