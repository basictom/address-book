app.factory("AddressFactory", function($q, $http, FIREBASE_CONFIG){


  let addressList = () => {
    let addresses = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/addresses.json`)
      .then((adItems) => {
          let addressesCollection = adItems.data;
          console.log(addressesCollection);
          // if(addressesCollection !== null){
            Object.keys(addressesCollection).forEach((key) => {
              addressesCollection[key].id=key;
              addresses.push(addressesCollection[key]);
            });
          // }
          resolve(addresses);
        resolve(adItems);
      }).catch((error) => {
        reject(error);
      });
    });
  };


  let postNewAddress = (newAddress) => {
    console.log("post function");
    return $q((resolve, reject) => {
      $http.post(`${FIREBASE_CONFIG.databaseURL}/addresses.json`, JSON.stringify(newAddress))
      .then((result) => {
        resolve(result);
      }).catch((error) => {
        reject(error);
      });
    });
  };

  let deleted = (addressId) => {
    // console.log(address)
    return $q((resolve, reject) => {
      $http.delete(`${FIREBASE_CONFIG.databaseURL}/addresses/${addressId}.json`)
      .then((results) => {
        resolve(results);
      }).catch((error) => {
        reject(error);
      });
    });
  };

  return {addressList:addressList, postNewAddress:postNewAddress, deleted:deleted};
});
