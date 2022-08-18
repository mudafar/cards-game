import { connect } from 'react-redux';
import { selectCardsLeftCounter } from '../../redux/selectors';
import { RootState } from '../../redux/store';
import CardCounter from './card-counter/component';

export default connect((state: RootState) => ({
  value: selectCardsLeftCounter(state),
}))(CardCounter);
