import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Home from './components/Home';
import Payment from './components/Payment';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<Provider store={store}>
			<div className='App'>
				<BrowserRouter>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/payment' component={Payment} />
					</Switch>
				</BrowserRouter>
			</div>
		</Provider>
	);
}

export default App;
