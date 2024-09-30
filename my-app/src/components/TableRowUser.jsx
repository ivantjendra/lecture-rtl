export default function TableRowUser({ user }) {
  return (
    <tr data-testid={`user-${user.id}`}>
      <th scope="row">{user.id}</th>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
    </tr>
  );
}
