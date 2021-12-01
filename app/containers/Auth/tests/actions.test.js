import Actions from '../actions';

describe('Auth actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: Actions.Types.DEFAULT,
      };
      expect(Actions.Creators.default()).toEqual(expected);
    });
  });
});
