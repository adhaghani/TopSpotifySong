import React from "react";

const CLIENT_ID = "your-client-id";
const REDIRECT_URI = "http://localhost:3000/callback";
const SCOPES = "user-top-read";

const SpotifyAuth = () => {
  const handleLogin = () => {
    const authUrl = `https://accounts.spotify.com/authorize?response_type=token&client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
      REDIRECT_URI
    )}&scope=${encodeURIComponent(SCOPES)}`;
    window.location.href = authUrl;
  };

  return (
    <button className="Button Spotify" onClick={handleLogin}>
      Login with Spotify
    </button>
  );
};

export default SpotifyAuth;
