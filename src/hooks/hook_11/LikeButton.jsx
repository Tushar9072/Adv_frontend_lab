import React, { useState } from "react";
import { updateLikeAPI } from "../../api/mockApi";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleLike = () => {
    const optimisticLikes = likes + 1;

    // Optimistically update UI instantly
    setLikes(optimisticLikes);
    setLoading(true);

    updateLikeAPI(optimisticLikes)
      .then((serverLikes) => {
        setLikes(serverLikes); // sync with API
      })
      .catch(() => {
        alert("Failed to update like on server. Reverting.");
        setLikes(likes); // revert if API fails
      })
      .finally(() => setLoading(false));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Likes: {likes}</h2>
      <button onClick={handleLike} disabled={loading}>
        {loading ? "Saving..." : "Like 👍"}
      </button>
    </div>
  );
}
