
function isObject(info){
   return typeof info=='object' && info!=null
}

function deepClone(obj, hash = new WeakMap()){
  if (!isObject(obj)) return obj;

  if (hash.has(obj)) {
    return hash.get(obj);
  }

  let target=Array.isArray(obj)?[]:{};
  hash.set(obj, target);
  Reflect.ownKeys(obj).forEach((item) => {
    if (isObject(obj[item])) {
      target[item] = deepClone(obj[item], hash);
    } else {
      target[item] = obj[item];
    }
  });

  return target;

 


}