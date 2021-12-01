/**
 *
 * LoginPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLoginPage from './selectors';
import Actions from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function LoginPage() {
  useInjectReducer({ key: 'loginPage', reducer });
  useInjectSaga({ key: 'loginPage', saga });

  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

LoginPage.propTypes = {
  getLoginPage: PropTypes.object,
  loginPageState: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  loginPageState: makeSelectLoginPage(),
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

export default compose(withConnect)(LoginPage);
