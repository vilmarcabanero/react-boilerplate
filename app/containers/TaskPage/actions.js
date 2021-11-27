/*
 *
 * TaskPage actions
 *
 */

import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  default: null,
  getTaskPage: null,
  setTaskPage: ['data'],
});

const Actions = {
  Types,
  Creators,
};

export default Actions;
