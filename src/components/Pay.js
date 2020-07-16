import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class Pay extends Component {
	render() {
		return (
			<div className='row'>
				<div className='col-md-12'>
					{this.props.cartProps.cartCost > 0 && (
						<Link to='/payment'>
							<button type='button' className='btn btn-success pull-right'>
								<b>
									Pay {this.props.cartProps.currencyDisplay}
									{this.props.cartProps.cartCost}
								</b>
							</button>
						</Link>
					)}
				</div>
			</div>
		);
	}
}

const mapStateToPRops = (state) => ({
	cartProps: state.cartState,
});

export default connect(mapStateToPRops)(Pay);
