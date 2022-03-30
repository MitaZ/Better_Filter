function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16).toUpperCase());}

var modifiedHeaders = $request.headers;
modifiedHeaders['deviceId'] = uuidv4();
modifiedHeaders['appVersion'] = '5.15.12';
modifiedHeaders['deviceType'] = 'iPhone14,5';
modifiedHeaders['osVersion'] = '15.4';

var modifiedScheme = 'https';

$done({scheme：modifiedScheme, headers: modifiedHeaders});
