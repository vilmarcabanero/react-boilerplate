/*
 *
 * Auth actions
 *
 */

import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  default: null,
  getAuth: null,
  setAuth: ['data'],
  getUser: null,
  setUser: ['data'],
  toggleSignedIn: ['isSignedIn'],
});

const Actions = {
  Types,
  Creators,
};

export default Actions;
