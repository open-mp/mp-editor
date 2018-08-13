const queryString = require('query-string');

export function getQuery() {
  let parsed = queryString.parse(location.search);
  return parsed;
}

export function getHash() {
  let parsed = queryString.parse(location.hash);
  return parsed;
}

export function setHash(key, value) {
  let parsed = queryString.parse(location.hash);
  parsed[key] = value;
  location.hash = queryString.stringify(parsed);
}
