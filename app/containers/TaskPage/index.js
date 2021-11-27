/**
 *
 * TaskPage
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectTaskPage from './selectors';
import Actions from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function TaskPage(props) {
  useInjectReducer({ key: 'taskPage', reducer });
  useInjectSaga({ key: 'taskPage', saga });

  const { getTaskPage, taskPageState } = props;
  const { data } = taskPageState;

  useEffect(() => {
    getTaskPage();
  }, []);

  return (
    <div>
      <FormattedMessage {...messages.header} />
      {data.map(a => (
        <div key={a.id}>{a.title}</div>
      ))}
    </div>
  );
}

TaskPage.propTypes = {
  getTaskPage: PropTypes.object,
  taskPageState: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  taskPageState: makeSelectTaskPage(),
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

export default compose(withConnect)(TaskPage);
