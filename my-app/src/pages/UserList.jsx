import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TableRowUser from "../components/TableRowUser";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  async function fetchUsers() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();

      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <button className="btn btn-success mb-4" onClick={() => navigate("/")}>
        Back to Home
      </button>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <TableRowUser key={`user-${user.id}`} user={user} />
          ))}
        </tbody>
      </table>
    </>
  );
}
