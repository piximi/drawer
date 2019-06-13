import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import * as React from 'react';
import HelpIcon from '@material-ui/icons/Help';
import { useDialog } from '@piximi/hooks';

export const HelpListItem = () => {
  const { openedDialog, openDialog, closeDialog } = useDialog();

  return (
    <React.Fragment>
      <ListItem dense disabled button onClick={openDialog}>
        <ListItemIcon>
          <HelpIcon />
        </ListItemIcon>

        <ListItemText primary="Help" />
      </ListItem>

      <HelpDialog onClose={closeDialog} open={openedDialog} />
    </React.Fragment>
  );
};
