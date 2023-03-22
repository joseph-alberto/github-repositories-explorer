import { FC } from "react"
import { User } from "../interfaces"
import Dropdown from "./Dropdown/Dropdown"

type Props = {
  users: User[]
  search: string
}

const UserList: FC<Props> = ({ users = [], search }) => {
  return (
    <div className='flex flex-col gap-2' data-testid='user-list-container'>
      <p className={`text-gray-500 select-none ${search=== "" && "hidden"}`} data-testid="showing-users-text">
        Showing users for {search}
      </p>
      <div className="flex flex-col gap-2">
      {users.map((user, key) => (
        <Dropdown user={user} key={key} />
      ))}
      </div>
    </div>
  )
}

export default UserList
