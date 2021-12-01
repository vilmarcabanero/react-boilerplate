import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import * as Styled from './styles';

function LoginForm(props) {
  //  const classes = Styled.useStyles();
  const { defaultProp } = props;
  const [defaultState, setDefaultState] = useState('');

  useEffect(() => {
    setDefaultState('default');
  }, []);

  return (
    <Styled.MainContainer>
      <Typography>
        This is the LoginForm component. {defaultProp} {defaultState}
      </Typography>
    </Styled.MainContainer>
  );
}

export default LoginForm;

LoginForm.propTypes = {
  defaultProp: PropTypes.object,
};
