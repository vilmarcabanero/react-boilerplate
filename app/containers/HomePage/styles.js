import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { Button, Container } from '@material-ui/core';
export const useStyles = makeStyles(() => ({
  darkmode: {
    display: 'flex',
    justifyContent: 'flex-start',
    position: 'relative',
    textTransform: 'none',
    width: '14rem',
    paddingLeft: 10,
    borderRadius: 5,
    '&:hover': {
      backgroundColor: 'rgba(200, 200, 200, 0.3)',
    },
  },
}));

export const MainContainer = styled(Container)``;

export const SubmitButton = styled(Button)`
  text-transform: none;
`;
