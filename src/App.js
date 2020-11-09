import './App.scss';
import AppHeader from 'components/app-header/app-header';
import AppBody from 'components/app-body/app-body';
import {ToastContainer} from 'react-toastify';

/**
 * App that contains AppHeader, AppBody, and Toast container used for searching stocks
 * and showing the details of the stock. Upon error a toaster message will show 
 * warning or reporting the error
 */
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
