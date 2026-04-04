import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Typography, Button, Paper } from "@mui/material";
import fetchModel from "../../lib/fetchModelData";

function UserDetail() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchModel(`/user/${userId}`).then((data) => setUser(data));
  }, [userId]);

  if (!user) return <Typography>Loading...</Typography>;

  return (
    <Paper style={{ padding: 16 }}>
      <Typography variant="h5">
        {user.first_name} {user.last_name}
      </Typography>
      <Typography>📍 Location: {user.location}</Typography>
      <Typography>💼 Occupation: {user.occupation}</Typography>
      <Typography>📝 Description: {user.description}</Typography>
      <Button
        component={Link}
        to={`/photos/${user._id}`}
        variant="contained"
        color="primary"
        style={{ marginTop: 16 }}
      >
        View Photos
      </Button>
    </Paper>
  );
}

export default UserDetail;
