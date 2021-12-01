/**
 *
 * Auth
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectAuth from './selectors';
import Actions from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Auth() {
  useInjectReducer({ key: 'auth', reducer });
  useInjectSaga({ key: 'auth', saga });

  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Auth.propTypes = {};

const mapStateToProps = createStructuredSelector({
  authState: makeSelectAuth(),
});

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(
      {
        ...Actions.Creators,
      },
      dispatch,
    ),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Auth);
