import React, { Component } from "react";
import { connect } from "react-redux";
import { dispatch } from "../../redux";
import "./HomeHeader.scss";

class HomeHeader extends Component {
  render() {
    return (
      <div className="home-header-container">
        <div className="home-header-content">
          <div className="left-content">
            <i className="fas fa-bars"></i>
            <div className="header-logo"></div>
          </div>

          <div className="center-content">
            <div className="child-content">
              <div>
                <b>Chuyên Khoa</b>
              </div>
              <div className="subs-title">Tìm bác sĩ theo chuyên khoa</div>
            </div>
            <div className="child-content">
              <div>
                <b>Cơ sở y tế</b>
              </div>
              <div className="subs-title">Chọn bệnh viện phòng khám</div>
            </div>
            <div className="child-content">
              <div>
                <b>Bác sĩ</b>
              </div>
              <div className="subs-title">Chọn Bác sĩ giỏi</div>
            </div>
            <div className="child-content">
              <div>
                <b>Gói Khám</b>
              </div>
              <div className="subs-title">Khám sức khoẻ tổng quát</div>
            </div>
          </div>

          <div className="right-content">
            <div className="support">
              <i className="fas fa-question-circle"></i>Hỗ trợ
            </div>
          </div>
        </div>
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
