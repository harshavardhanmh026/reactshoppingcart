import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectProduct, selectAll } from '../actions/selectProduct';
import { deleteProduct } from '../actions/deleteProduct';

export class ProductList extends Component {
	render() {
		let cartItems = [];

		Object.keys(this.props.cartProps.products).forEach((items) => {
			cartItems.push(this.props.cartProps.products[items]);
		});

		cartItems = cartItems.filter((item) => item.inCart);
		cartItems = cartItems.map((items, index) => {
			return (
				<tr key={index}>
					<td>
						<input
							type='checkbox'
							id={items.name}
							onChange={() => this.props.selectProduct(items.name)}
							checked={items.isSelected}
						/>
					</td>
					<td>{items.name}</td>
					<td>{items.price}</td>
					<td>
						<i
							className='fa fa-trash delete-icon'
							onClick={() => this.props.deleteProduct(items.name)}
							aria-hidden='true'
						></i>
					</td>
				</tr>
			);
		});

		return (
			<div className='container'>
				<table className='table table-striped'>
					<thead>
						<tr>
							<th>
								<input
									type='checkbox'
									onChange={(e) => this.props.selectAll(e)}
								/>
							</th>
							<th>Product</th>
							<th>Price</th>
							<th></th>
						</tr>
					</thead>
					<tbody>{cartItems}</tbody>
				</table>
			</div>
		);
	}
}

const mapStateToPRops = (state) => ({
	cartProps: state.cartState,
});
export default connect(mapStateToPRops, {
	selectProduct,
	selectAll,
	deleteProduct,
})(ProductList);
