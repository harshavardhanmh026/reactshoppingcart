import React from 'react';
import { connect } from 'react-redux';
import { getProductDetails } from '../actions/getProductDetails';
import { deleteSelectedProduct } from '../actions/deleteProduct';

const Deleteall = ({ cartProps, deleteSelectedProduct }) => {
	let cartItems = [];

	Object.keys(cartProps.products).forEach((items) => {
		cartItems.push(cartProps.products[items]);
	});
	cartItems = cartItems.filter((item) => item.isSelected);

	return (
		<div className='row'>
			<div className='col-md-6'>
				<div className='card'>
					<div className='card-header'>Selected : {cartItems.length}</div>
				</div>
			</div>
			<div className='col-md-6'>
				<button
					type='button'
					onClick={() => deleteSelectedProduct()}
					className='btn btn-danger pull-right'
				>
					Delete
				</button>
			</div>
		</div>
	);
};

const mapStateToPRops = (state) => ({
	cartProps: state.cartState,
});
export default connect(mapStateToPRops, {
	getProductDetails,
	deleteSelectedProduct,
})(Deleteall);
