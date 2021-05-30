import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './components/views/Login/Login';
import Homepage from './components/views/Homepage/Homepage';
import Waiter from './components/views/Waiter/Waiter';
import Kitchen from './components/views/Kitchen/Kitchen';
import Booking from './components/views/Booking/Booking';
import Event from './components/views/Event/Event';
import Tables from './components/views/Tables/Tables';
import New from './components/views/New/NewOrderContainer';
import Order from './components/views/Order/Order';
import { Provider } from 'react-redux';
import store from '../src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <MainLayout>
            <Switch>
             <Route exact path={process.env.PUBLIC_URL + '/'} component={Homepage} />
             <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
             <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
             <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={Booking} />
             <Route exact path={process.env.PUBLIC_URL + '/tables/event/:id'} component = {Event}/>
             <Route exact path={`${process.env.PUBLIC_URL}/ordering`} component={Waiter} />
             <Route exact path={`${process.env.PUBLIC_URL}/ordering/new`} component = {New}/>
             <Route exact path={`${process.env.PUBLIC_URL}/ordering/order/:id`} component = {Order}/>
             <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
            </Switch>
          </MainLayout>
        </BrowserRouter>
      </div>
    </Provider>
    
  );
}

export default App;
