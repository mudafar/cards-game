import { connect } from 'react-redux';
import { selectAcesLeftCounter } from '../../redux/selectors';
import { RootState } from '../../redux/store';
import CardCounter from './card-counter/component';

export default connect((state: RootState) => ({
  value: selectAcesLeftCounter(state),
}))(CardCounter);
