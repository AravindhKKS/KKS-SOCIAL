import "./right.css";
import { Users } from "../../data";
import Online from "../online/Online";

export default function RightBar({profile}) {

  const HomeRightBar = () =>{
    return(
    <>
    <div className="birthdayContainer">
          <img src="/assets/download/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Guna</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img src="/assets/download/ad.png" alt="" className="rightAd" />
        <h4 className="rightTitle">Online friends</h4>
        <ul className="rightFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
    </>
    )  
}
  
const ProfileRightbar = () =>{
  return(
     <>
     <h4 className="rightbarTitle">User information</h4>
     <div className="rightbarInfo">
      <span className="rightbarInfoKey">City:</span>
      <span className="rightbarInfoValue">India</span>
     </div>
     <div className="rightbarInfo">
      <span className="rightbarInfoKey">From:</span>
      <span className="rightbarInfoValue">Karuppur</span>
     </div>
      <div className="rightbarInfo">
      <span className="rightbarInfoKey">Relationship:</span>
      <span className="rightbarInfoValue">Single</span>
     </div>

     <h4 className="rightbarTitle">User Friends</h4>
     <div className="rightbarFollowings">
      <div className="rightbarFollowing">
        <img src="assets/download/profile/1.jpeg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Guna </span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/download/profile/2.jpeg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Guna </span>
      </div><div className="rightbarFollowing">
        <img src="assets/download/profile/3.jpeg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Guna </span>
      </div><div className="rightbarFollowing">
        <img src="assets/download/profile/4.jpeg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Guna </span>
      </div><div className="rightbarFollowing">
        <img src="assets/download/profile/5.jpeg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Guna </span>
      </div><div className="rightbarFollowing">
        <img src="assets/download/profile/6.jpeg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Guna </span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/download/profile/7.jpeg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Guna </span>
      </div>
     </div>
    </>
  )
}

  return (
    <div className="rightbar">
      <div className="rightWrapper">
      { profile ? <ProfileRightbar/> : <HomeRightBar/>}
      </div>
    </div>
  );
}
