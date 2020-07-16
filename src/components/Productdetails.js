import React from 'react';
import { connect } from 'react-redux';

const Productdetails = ({ cartProps }) => {
	let cartItems = [];

	Object.keys(cartProps.products).forEach((items) => {
		cartItems.push(cartProps.products[items]);
	});

	cartItems = cartItems.filter((item) => item.isSelected);
	cartItems = cartItems.map((items, index) => {
		return (
			<tr key={index}>
				<td>{items.name}</td>
				<td>{items.price}</td>
			</tr>
		);
	});

	return (
		<div>
			<div className='card'>
				<div className='card-body'>
					<h4>{cartItems.length} Product/s Selected</h4>
				</div>
				<table className='table table-striped'>
					<thead>
						<tr>
							<th>Product</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>{cartItems}</tbody>
				</table>
			</div>
		</div>
	);
};
const mapStateToPRops = (state) => ({
	cartProps: state.cartState,
});

export default connect(mapStateToPRops)(Productdetails);
