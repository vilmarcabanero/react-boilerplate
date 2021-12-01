import { fromJS } from 'immutable';
import reducer, { defaultReducer } from '../reducer';

describe('loginPageReducer', () => {
  const INITIAL_STATE = fromJS({
    status: true,
  });

  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual(fromJS(INITIAL_STATE));
  });

  it('defaultReducer', () => {
    expect(defaultReducer(INITIAL_STATE, {})).toEqual(
      INITIAL_STATE.merge({
        status: false,
      }),
    );
  });
});
