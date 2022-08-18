import { connect } from 'react-redux';
import { reset } from '../../redux/slice';
import App from './component';

export default connect(
  () => ({}),
  (dispatch) => ({
    onReset: () => dispatch(reset()),
  })
)(App);
