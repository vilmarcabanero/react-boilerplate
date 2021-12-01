/*
 *
 * LoginPage actions
 *
 */

import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  default: null,
  getLoginPage: null,
  setLoginPage: ['data'],
});

const Actions = {
  Types,
  Creators,
};

export default Actions;
