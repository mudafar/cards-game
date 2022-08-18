import { connect } from 'react-redux';
import { selectDealtCards } from '../../redux/selectors';
import { RootState } from '../../redux/store';
import Cards from './component';

export default connect((state: RootState) => ({ cards: selectDealtCards(state) }))(Cards);
