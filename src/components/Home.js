import React from 'react';
import ProductList from './ProductList';
import Headerbar from './Headerbar';
import Productdetails from './Productdetails';
import Deleteall from './Deleteall';
import Pay from './Pay';

const Home = () => {
	return (
		<div>
			<div className='container-fluid header-color'>
				<Headerbar />
			</div>
			<div className='container container-padding'>
				<div className='row'>
					<div className='col-sm-6'>
						<ProductList />
					</div>
					<div className='col-sm-6'>
						<Productdetails />
					</div>
				</div>
				<div className='row'>
					<div className='col-sm-6'>
						<Deleteall />
					</div>
					<div className='col-sm-6'>
						<Pay />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
