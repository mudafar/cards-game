import { connect } from 'react-redux';
import { selectIsGameOver } from '../../redux/selectors';
import { RootState } from '../../redux/store';
import Message from './component';

export default connect((state: RootState) => ({
  isShown: selectIsGameOver(state),
}))(Message);
