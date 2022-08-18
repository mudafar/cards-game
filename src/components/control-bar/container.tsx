import { connect } from 'react-redux';
import { selectIsPlaying } from '../../redux/selectors';
import { deal, reset } from '../../redux/slice';
import { RootState } from '../../redux/store';
import ControlBar from './component';

export default connect(
  (state: RootState) => ({
    isPlaying: selectIsPlaying(state),
  }),
  (dispatch) => ({
    onDeal: () => dispatch(deal()),
    onReset: () => dispatch(reset()),
  })
)(ControlBar);
