import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src="./assets/download/profile/1.jpeg"
            className="shareImg"
            alt=""
          />
          <input
            placeholder="what's in your mind Aravindh?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcons" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcons" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcons" />
              <span className="shareOptionText">Locations</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcons" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">share</button>
        </div>
      </div>
    </div>
  );
}
