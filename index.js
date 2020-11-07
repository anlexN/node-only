
module.exports = function(obj = {}, keys){
  if ('string' == typeof keys) keys = keys.split(/ +/);

  return keys.reduce(function(ret, key){
    // if (null == obj[key]) return ret;
    // ret[key] = obj[key];
    // return ret;
    if (null != obj[key]) ret[key] = obj[key];

    return ret;
  }, {});
};
