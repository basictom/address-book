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


  // let getSingleAddress = (id) => {
  //   return $q((resolve, reject) => {
  //     $http.get(`${FIREBASE_CONFIG.databaseURL}/items/${id}.json`)
  //     .then((results) => {
  //       results.data.id = id;
  //       console.log(results);
  //       resolve(results);
  //     }).catch((error) => {
  //       reject(error);
  //     });
  //   });
  // };


// getSingleAddress:getSingleAddress


  return {addressList:addressList,};
});