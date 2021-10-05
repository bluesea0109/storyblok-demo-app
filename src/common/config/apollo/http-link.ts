import {HttpLink} from '@apollo/client/link/http';

export function createHttpLink() {
  return new HttpLink({
    uri: 'https://gapi.storyblok.com/v1/api',
    headers: {
      token: 'sOeIVZFu1rwLtcR4iPrdzwtt',
    },
  });
}
