import { connect } from 'react-redux';
import { createCategoryAction } from '@piximi/store';
import uuidv4 from 'uuid';
import { Dispatch } from 'redux';
import { Category, Classifier } from '@piximi/types';
import { CreateCategoryDialog } from './CreateCategoryDialog';

let index = 0;

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
    createCategory: (color: string, description: string) => {
      const category: Category = {
        description: description,
        identifier: uuidv4(),
        index: index++,
        visualization: {
          color: color,
          visible: true
        }
      };

      const payload = { category: category };

      const action = createCategoryAction(payload);

      dispatch(action);
    }
  };
};

export const ConnectedCreateCategoryDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCategoryDialog);
