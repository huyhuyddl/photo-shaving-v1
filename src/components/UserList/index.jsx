import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemText } from "@mui/material";
import fetchModel from "../../lib/fetchModelData";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchModel("/user/list").then((data) => setUsers(data));
  }, []);

  return (
    <List>
      {users.map((user) => (
        <ListItem
          key={user._id}
          component={Link}
          to={`/users/${user._id}`}
          button
        >
          <ListItemText primary={`${user.first_name} ${user.last_name}`} />
        </ListItem>
      ))}
    </List>
  );
}

export default UserList;
