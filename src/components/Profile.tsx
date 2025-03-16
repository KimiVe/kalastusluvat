import { useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../store";
import { theme } from "../theme";

const Profile = () => {
  const { content } = useSelector((state: AppState) => state.selectedLanguage);
  const userProfile = useSelector((state: AppState) => state.userProfile);

  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(userProfile);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div
      style={{
        backgroundColor: "#f4f4f4",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          justifyContent: "center",
          height: "700px",
          backgroundColor: theme.colors.green2,
          padding: "30px",
          maxWidth: "900px",
          position: "relative",
          display: "flex",
          textAlign: "center",
          width: "100%",
        }}
      >
        <div style={{ textAlign: "left", marginTop: "30px", width: "200%" }}>
          <p>
            <strong>{content.Profile.header}:</strong>
          </p>
          <p>
            <strong>{content.Profile.name}:</strong>
            {isEditing ? (
              <input
                name="name"
                value={profile.name}
                onChange={handleChange}
                style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
              />
            ) : (
              profile.name
            )}
          </p>
          <p>
            <strong>{content.Profile.address}:</strong>
            {isEditing ? (
              <input
                name="address"
                value={profile.address}
                onChange={handleChange}
                style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
              />
            ) : (
              profile.address
            )}
          </p>
          <p>
            <strong>{content.Profile.phoneNumber}:</strong>
            {isEditing ? (
              <input
                name="phoneNumber"
                value={profile.phoneNumber}
                onChange={handleChange}
                style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
              />
            ) : (
              profile.phoneNumber
            )}
          </p>
          <p>
            <strong>{content.Profile.email}:</strong>
            {isEditing ? (
              <input
                name="email"
                value={profile.email}
                onChange={handleChange}
                style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
              />
            ) : (
              profile.email
            )}
          </p>
          <button
            onClick={() => setIsEditing(!isEditing)}
            style={{
              background: "#2A4D74",
              color: "white",
              border: "none",
              cursor: "pointer",
              padding: "10px",
              marginTop: "10px",
            }}
          >
            {isEditing ? content.Profile.save : content.Profile.edit}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;