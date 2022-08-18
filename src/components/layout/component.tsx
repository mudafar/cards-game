import Confetti from '../banner';
import Cards from '../cards';
import Banner from '../confetti';
import ControlBar from '../control-bar';
import Dashboard from '../dashboard';
import Message from '../message';

function Layout() {
  return (
    <>
      <Dashboard />
      <Cards />
      <Banner />
      <Confetti />
      <Message />
      <ControlBar />
    </>
  );
}

export default Layout;
