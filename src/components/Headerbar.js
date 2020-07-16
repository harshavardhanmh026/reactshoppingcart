import React from 'react';
import { connect } from 'react-redux';
import { getProductDetails } from '../actions/getProductDetails';
import { convertCurrency } from '../actions/convertCurrency';

const Headerbar = ({ cartProps, convertCurrency }) => {
	let cartItems = [];

	Object.keys(cartProps.products).forEach((items) => {
		cartItems.push(cartProps.products[items]);
	});

	cartItems = cartItems.filter((item) => item.inCart);
	return (
		<div className='row'>
			<div className='col-md-6'>
				<center>
					<h1>
						<span className='badge badge-secondary'>Radware Store</span>
					</h1>
					<h2>
						<span className='badge badge-secondary'>Shopping cart</span>
					</h2>
				</center>
			</div>
			<div className='col-md-6'>
				<div className='row'>
					<div className='col-md-6 item-selected-div'>
						<span className='badge badge-info info-badge-width'>
							Items : {cartItems.length}
							<br />
							Sum : {cartProps.currencyDisplay}
							{cartProps.cartCost}
						</span>
					</div>
					<div className='col-md-6'>
						<div className='dropdown currency'>
							<button
								className='btn btn-secondary dropdown-toggle'
								type='button'
								id='dropdownMenuButton'
								data-toggle='dropdown'
								aria-haspopup='true'
								aria-expanded='false'
							>
								Currency
							</button>
							<div
								className='dropdown-menu'
								aria-labelledby='dropdownMenuButton'
							>
								<button
									className='dropdown-item'
									onClick={() => convertCurrency('D')}
									type='button'
								>
									$ Dollar
								</button>
								<button
									className='dropdown-item'
									onClick={() => convertCurrency('R')}
									type='button'
								>
									₹ Rupees
								</button>
								<button
									className='dropdown-item'
									onClick={() => convertCurrency('S')}
									type='button'
								>
									₪ Shekel
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
const mapStateToPRops = (state) => ({
	cartProps: state.cartState,
});
export default connect(mapStateToPRops, { getProductDetails, convertCurrency })(
	Headerbar
);
