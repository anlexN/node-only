
module.exports = function(obj = {}, keys){
  if ('string' == typeof keys) keys = keys.trim().split(/ +/);

  return keys.reduce(function(ret, key){
    if (null != obj[key]) ret[key] = obj[key];

    return ret;
  }, {});
};
