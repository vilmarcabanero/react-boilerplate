/*
 *
 * RegisterPage actions
 *
 */

import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  default: null,
  getRegisterPage: null,
  setRegisterPage: ['data'],
});

const Actions = {
  Types,
  Creators,
};

export default Actions;
