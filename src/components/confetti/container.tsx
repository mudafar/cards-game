import { connect } from 'react-redux';
import { selectIsWin } from '../../redux/selectors';
import { RootState } from '../../redux/store';
import Confetti from './component';

export default connect((state: RootState) => ({
  isShown: selectIsWin(state),
}))(Confetti);
