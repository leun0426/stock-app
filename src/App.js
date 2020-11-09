import './App.scss';
import AppHeader from 'components/app-header/app-header';
import AppBody from 'components/app-body/app-body';
import {ToastContainer} from 'react-toastify';

function App() {

  return (
    <>
      <AppHeader></AppHeader>
      <hr></hr>
      <AppBody></AppBody>
      <ToastContainer />
    </>
  );
}

export default App;
