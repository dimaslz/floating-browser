/* 
  If the user enters a url without https:// or http:// this will prepend it for them 
  source: https://stackoverflow.com/a/3543207
*/
const checkHttps = (url) => {
  const https = 'https://';
  const http = 'http://';
  const httpsTest = url.substr(0, https.length) === https;
  const httpTest = url.substr(0, http) === http;
  if (!httpsTest && !httpTest) {
      return https + url;
  }

  return url;
}