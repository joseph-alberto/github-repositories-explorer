import { FC } from "react"
import { User } from "../interfaces"
import Dropdown from "./Dropdown/Dropdown"

type Props = {
  users: User[]
  search: string
}

const UserList: FC<Props> = ({ users = [], search }) => {
  return (
    <div className='flex flex-col gap-2'>
      <p className='text-gray-500 select-none'>
        Showing users for {search}
      </p>
      {users.map((user, key) => (
        <Dropdown user={user} key={key} />
      ))}
    </div>
  )
}

export default UserList
