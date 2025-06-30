import { useState } from "react";

export const UserFilter = ({ children }) => {
  const [filter, setLilter] = useState('');

  return (
    <div>
      <input type="text" value={filter} onChange={(e) => setLilter(e.target.value)} />
      {children(filter)}
    </div>
  )
}

const userData = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
  { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
]

//** Usage:
// <UserFilter>
//   {(filter) => (
//     <div>
//       {userData
//          .filter((user) => user.name.toLowerCase().includes(filter.toLowerCase()))
//          .map((user) => (<div key={user.id}>{user.name}</div>))
//       }
//     </div>
//   )}
// </UserFilter>