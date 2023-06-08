import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

class About extends Component {
  render() {
    return (
      <div className="section-share section-about">
        <div className="section-about-header">Truyền thông nói về Sơn Tùng</div>
        <div className="section-about-content">
          <div className="content-left">
            <iframe
              width="100%"
              height="400px"
              src="https://www.youtube.com/embed/niPkap1ozUA"
              title="SON TUNG M-TP | MAKING MY WAY | OFFICIAL VISUALIZER"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="content-right">
            <p>
              "Listen to MAKING MY WAY right here: https://orcd.co/stmtp-mmw
              👈🏼👈🏼👈🏼✨✨✨ #MakingMyWay #SonTungMTP ▶ More information about Sơn
              Tùng M-TP: https://www.facebook.com/MTP.Fan
              https://www.instagram.com/sontungmtp / sontungmtp
              https://twitter.com/sontungmtp777
              @Spotify:https://spoti.fi/2HPWs20 @Itunes:
              https://apple.co/2rlSl3w ▶More information about M-TP Talent:
              https://www.facebook.com/mtptalent
              https://www.instagram.com/mtptalent https://twitter.com/mtptalent
              ▶ More about M-TP ENTERTAINMENT https://www.facebook.com/mtptown
              https://mtpentertainment.com https://twitter.com/mtpent_official
              https://www.instagram.com/mtpent_offi... ▶ CLICK TO SUBSCRIBE:
              http://popsww.com/sontungmtp"
            </p>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(About);
