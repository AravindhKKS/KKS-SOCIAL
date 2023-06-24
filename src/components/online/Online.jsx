import "./online.css";

export default function Online({ user }) {
  return (
    <div>
      <li className="rightFriend">
        <div className="rightProfileImgContainer">
          <img src={user.profilePicture} alt="" className="rightProfileImg" />
          <span className="rightOnline"></span>
        </div>
        <span className="rightUsername"> {user.username}</span>
      </li>
    </div>
  );
}
