function truthCheck(collection, pre) {
  let keysArr = []
  collection.forEach(obj => keysArr.push(Object.keys(obj)))
  if(keysArr.every(arr => arr.includes(pre))){
    return collection.every(obj => Boolean(obj[pre])) !== false
  }
  return false;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastForward", "onBoat": null}], "onBoat")