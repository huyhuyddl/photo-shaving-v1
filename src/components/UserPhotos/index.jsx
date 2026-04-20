import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Divider,
} from "@mui/material";
import fetchModel from "../../lib/fetchModelData";

function UserPhotos() {
  const { userId } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchModel(`/photo/photosOfUser/${userId}`).then((data) => setPhotos(data));
  }, [userId]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchModel(`/photo/photosOfUser/${userId}`).then((data) => {
      setPhotos(data);
      setLoading(false);
    });
  }, [userId]);

  if (loading) return <Typography>Loading...</Typography>;
  if (!photos.length) return <Typography>No photos yet.</Typography>;
  return (
    <div>
      {photos.map((photo) => (
        <Card key={photo._id} style={{ marginBottom: 24 }}>
          <CardMedia
            component="img"
            image={`/images/${photo.file_name}`}
            alt="photo"
          />
          <CardContent>
            <Typography variant="caption" color="textSecondary">
              📅 {new Date(photo.date_time).toLocaleString()}
            </Typography>
            <Divider style={{ margin: "12px 0" }} />
            <Typography variant="subtitle1">💬 Comments:</Typography>
            {photo.comments && photo.comments.length > 0 ? (
              photo.comments.map((comment) => (
                <div
                  key={comment._id}
                  style={{
                    marginBottom: 8,
                    paddingLeft: 8,
                    borderLeft: "3px solid #ccc",
                  }}
                >
                  <Typography variant="body2">
                    <Link to={`/users/${comment.user._id}`}>
                      <strong>
                        {comment.user.first_name} {comment.user.last_name}
                      </strong>
                    </Link>{" "}
                    <span style={{ color: "gray", fontSize: 12 }}>
                      {new Date(comment.date_time).toLocaleString()}
                    </span>
                  </Typography>
                  <Typography variant="body2">{comment.comment}</Typography>
                </div>
              ))
            ) : (
              <Typography variant="body2" color="textSecondary">
                No comments yet.
              </Typography>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default UserPhotos;
