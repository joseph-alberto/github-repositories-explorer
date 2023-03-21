import { FC, useState } from "react"
import * as Unicons from "@iconscout/react-unicons"
import * as UniconsSolid from "@iconscout/react-unicons-solid"
import { Repository, User } from "../../interfaces"
import axios from "axios"

type Props = {
  user: User
}

const Dropdown: FC<Props> = ({ user }) => {
  const [open, setOpen] = useState(false)
  const [repositories, setRepositories] = useState<Repository[]>([])

  const toggleOpen = async () => {
    const result = await axios.get(user.repos_url)
    setRepositories(
      result.data.map((data: any) => {
        return {
          title: data.name,
          description: data.description,
          stargazers_count: data.stargazers_count,
        }
      })
    )
    setOpen(!open)
  }
  return (
    <div className='flex flex-col gap-3'>
      <DropdownButton click={toggleOpen} name={user.name} />
      <div className={`flex flex-col gap-3 ${open ? "flex" : "hidden"} `}>
        {repositories.map((repository, key) => (
          <DropdownItem repository={repository} key={key} />
        ))}
      </div>
    </div>
  )
}

type DropdownButtonProps = {
  name: string
  click: () => void
}

const DropdownButton: FC<DropdownButtonProps> = ({ name, click }) => (
  <div className='bg-neutral-200 py-1.5 px-2 cursor-pointer' onClick={click}>
    <div className='flex justify-between'>
      <p className='select-none'>{name}</p>
      <span>
        <Unicons.UilAngleDown />
      </span>
    </div>
  </div>
)

type DropdownItemProps = {
  repository: Repository
}

const DropdownItem: FC<DropdownItemProps> = ({ repository }) => (
  <div className='pl-4'>
    <div className='bg-neutral-300 px-1.5 py-2'>
      <div className='flex'>
        <p className='basis-10/12 font-bold'>{repository.title}</p>
        <p className='basis-1/12 font-bold'>{repository.stargazers_count}</p>
        <span className='basis-1/12 place-self-center'>
          <UniconsSolid.UisStar size={18} />
        </span>
      </div>
      <p className='text-sm min-h-[3rem]'>{repository.description}</p>
    </div>
  </div>
)

export default Dropdown
