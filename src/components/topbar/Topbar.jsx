import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">
          <Link to="/" className="link">
            KKS-SOCIAL
          </Link>
        </span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for Friends, Post or Videos"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link to="/login" className="link">
            <span className="topbarLink">Login</span>
          </Link>
          <Link to="/register" className="link">
            {" "}
            <span className="topbarLink">Register</span>
          </Link>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to="./profile" className="link">
          <img
            src="/assets/download/Profile/1.jpeg"
            alt=""
            className="topbarImg"
          />
        </Link>
      </div>
    </div>
  );
}
