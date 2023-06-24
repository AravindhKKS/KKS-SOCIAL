import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightbar/RightBar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="assets/download/profile/10.jpeg"
                alt=""
                className="profileCoverImg"
              />
              <img
                src="assets/download/post/7.jpeg"
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Aravindh Natarajan </h4>
              <span className="profileInfoDesc">Hello My Friends!</span>
            </div>
            <div className="profileRightBottom">
              <RightBar profile />
              <Feed />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
