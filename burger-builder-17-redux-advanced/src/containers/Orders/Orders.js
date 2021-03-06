import React, { Component } from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner'

class Orders extends Component {
    componentDidMount() {
        this.props.onFetchOrders();
    }

    render () {
        let orders = <Spinner />;
        if (!this.props.loading) {
            console.log(this.props.orders)
            orders = this.props.orders.map(order => (
                <Order 
                    key={order.id}
                    ingredients={order.ingredients}
                    price={order.price}
                />
            ))
        }
        return orders;
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: () => dispatch(actionTypes.fetchOrders())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));