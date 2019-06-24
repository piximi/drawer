import * as React from 'react';
import { styles } from './NavigationDrawerAppBar.css';

import classNames from 'classnames';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles';
import {
  AppBar,
  IconButton,
  Toolbar,
  Tooltip,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles(styles);

type AppBarProps = {
  toggle: () => void;
  toggled: boolean;
};

export const NavigationDrawerAppBar = (props: AppBarProps) => {
  const { toggle, toggled } = props;

  const classes = useStyles({});

  return (
    <AppBar className={classNames(classes.appBar)} color="default">
      <Toolbar disableGutters={true}>
        <Tooltip title={(toggled ? 'Hide ' : 'Show ') + 'sidebar'}>
          <IconButton
            aria-label="open sidebar"
            className={classNames(classes.menuButton)}
            color="inherit"
            onClick={toggle}
          >
            <MenuIcon />
          </IconButton>
        </Tooltip>

        <Typography variant="h6" color="inherit">
          Piximi
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
