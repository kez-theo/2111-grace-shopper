import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../store/users";

const AllUsers = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => {
    return {
      users: state.usersReducer,
    };
  });

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <table>
      <tbody>
        <tr>
          <th>Username</th>
        </tr>
        {users.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.username}</td>
              {/* add an edit button to each user, need to go into single user view to delete */}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default AllUsers;
