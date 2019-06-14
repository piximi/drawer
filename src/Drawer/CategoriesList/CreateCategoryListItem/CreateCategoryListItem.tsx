import * as React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useDialog } from '@piximi/hooks';
import { useTranslation } from 'react-i18next';
import { ConnectedCreateCategoryDialog } from '../../../CreateCategoryDialog/ConnectedCreateCategoryDialog';

export const CreateCategoryListItem = () => {
  const { openedDialog, openDialog, closeDialog } = useDialog();

  const { t: translation } = useTranslation();

  return (
    <React.Fragment>
      <ListItem button onClick={openDialog}>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>

        <ListItemText primary={translation('Create category')} />
      </ListItem>

      <ConnectedCreateCategoryDialog
        onClose={closeDialog}
        open={openedDialog}
      />
    </React.Fragment>
  );
};
