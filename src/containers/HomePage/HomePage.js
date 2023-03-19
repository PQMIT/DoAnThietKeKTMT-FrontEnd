import React, { Component } from "react";
import { connect } from "react-redux";
import HomeHeader from "./HomeHeader";

class HomePage extends Component {
  render() {
    return (
      <div>
        <HomeHeader />
      </div>
    );
  }
}
const mapStatetoProps = (state) => {
  return { isLoggedIn: state.user.isLoggedIn };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStatetoProps, mapDispatchToProps)(HomeHeader);
