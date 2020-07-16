import React from 'react';
import { connect } from 'react-redux';

const Payment = ({ cartProps }) => {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-md-12'>
					<center>
						<b>
							Pay {cartProps.currencyDisplay}
							{cartProps.cartCost}
						</b>
					</center>
				</div>
			</div>
		</div>
	);
};

const mapStateToPRops = (state) => ({
	cartProps: state.cartState,
});

export default connect(mapStateToPRops)(Payment);
