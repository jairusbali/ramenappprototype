import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

const OrdersHistory = props => {
  // const [ordersHistory, setOrdersHistory] = useState(null);

  useEffect(() => {
    props.fetchOrdersHistory(props.token, props.userId);
  }, []);

  console.log(props.ordersHistory);

  return <h1>OrdersHistory</h1>;
};

const mapStateToProps = state => {
  return {
    token: state.auth.idToken,
    userId: state.auth.userId,
    ordersHistory: state.ordersHistory.ordersHistory
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchOrdersHistory: (token, userId) =>
      dispatch(actions.fetchOrdersHistory(token, userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrdersHistory);
