import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <ProfileImage img={tweet.user.image} />

      <div className="body">
        <div className="top">
          <span className="user"></span>
          <User name={tweet.user.name} handle={tweet.user.handle} />
          <Timestamp timestamp={tweet.timestamp} />
        </div>

        <Message message={tweet.message} />

        <div className="actions">
          <Actions />
        </div>
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
