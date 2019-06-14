import { connect } from 'react-redux';
import {
  toggleCategoryVisibilityAction,
  updateCategoryVisibilityAction,
  updateImageCategoryAction
} from '@piximi/store';
import { Classifier } from '@piximi/types';
import { Dispatch } from 'redux';
import { CategoryListItem } from './CategoryListItem';

type State = {
  classifier: Classifier;
};

const mapStateToProps = (state: State) => {
  return {
    categories: state.classifier.categories
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    toggleVisibility: (identifier: string) => {
      const payload = { identifier: identifier };

      const action = toggleCategoryVisibilityAction(payload);

      dispatch(action);
    },
    updateImageCategory: (identifier: string, categoryIdentifier: string) => {
      const payload = {
        categoryIdentifier: categoryIdentifier,
        identifier: identifier
      };

      const action = updateImageCategoryAction(payload);

      dispatch(action);
    },
    updateVisibility: (identifier: string, visible: boolean) => {
      const payload = { identifier: identifier, visible: visible };

      const action = updateCategoryVisibilityAction(payload);

      dispatch(action);
    }
  };
};

export const ConnectedCategoryListItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryListItem);
