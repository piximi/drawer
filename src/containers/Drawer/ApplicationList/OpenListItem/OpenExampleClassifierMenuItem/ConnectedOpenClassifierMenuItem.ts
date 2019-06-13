import { connect } from 'react-redux';
import { OpenClassifierMenuItem } from '../../../../../components/Drawer/ApplicationList/OpenListItem';
import { Category, Image, Classifier } from '@piximi/types';
import { Dispatch } from 'redux';
import { openClassifierAction } from '@piximi/store';

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
    openClassifier: (categories: Category[], images: Image[], name: string) => {
      const payload = {
        categories: categories,
        images: images,
        name: name
      };

      const action = openClassifierAction(payload);

      dispatch(action);
    }
  };
};

export const ConnectedOpenClassifierMenuItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(OpenClassifierMenuItem);
