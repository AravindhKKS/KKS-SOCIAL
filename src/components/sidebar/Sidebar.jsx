import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilled,
  Group,
  Bookmark,
  HelpOutline,
  Work,
  Event,
  School,
} from "@material-ui/icons";
import CloseFriends from "../closeFriends/CloseFriends";
import { Users } from "../../data";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebaListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebaListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilled className="sidebarIcon" />
            <span className="sidebaListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebaListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebaListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebaListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <Work className="sidebarIcon" />
            <span className="sidebaListItemText">Jobs</span>
          </li>{" "}
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebaListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebaListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriends key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
