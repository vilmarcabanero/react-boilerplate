/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import ThemeContext from 'utils/contextTheme';
import { Typography, ListItem, Switch } from '@material-ui/core';
import { SettingsBrightness } from '@material-ui/icons';
import messages from './messages';
import * as Styled from './styles';

export default function HomePage() {
  const classes = Styled.useStyles();
  const { darkMode, setDarkMode } = React.useContext(ThemeContext);
  const darkModeHandler = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', JSON.stringify(!darkMode));
  };
  return (
    <Styled.Container>
      <Typography variant="h5">
        <FormattedMessage {...messages.header} />
      </Typography>
      <ListItem className={`${classes.darkmode}`}>
        <SettingsBrightness style={{ marginRight: 5 }} />
        <Typography variant="subtitle1" style={{ marginRight: 30 }}>
          Dark Mode
        </Typography>
        <Switch
          color="secondary"
          checked={darkMode}
          onChange={darkModeHandler}
        />
      </ListItem>
    </Styled.Container>
  );
}
