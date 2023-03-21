import "./App.css"
import UserList from "./components/UserList"
import { User } from "./interfaces"
import { useEffect, useRef, useState } from "react"
import axios from "axios"

function App() {
  const [search, setSearch] = useState("")
  const searchRef = useRef<HTMLInputElement>(null)
  const [users, setUsers] = useState<User[]>([])

  const searchOnClick = async () => {
    setSearch(searchRef.current?.value ?? "")
  }

  useEffect(() => {
    if(search !== ""){
      axios
      .get(`https://api.github.com/search/users?q=${search}&per_page=5`)
      .then((result) => {
        setUsers(
          result.data.items.map((item: any) => {
            return {
              name: item.login,
              repos_url: item.repos_url,
            }
          })
        )
      })
    }else{
      setUsers([])
    }
  }, [search])

  return (
    <div className='w-full mx-auto bg-stone-100'>
      <div className='max-w-sm min-h-screen flex flex-col gap-4 mx-auto p-4 bg-white'>
        <input
          className='border bg-gray-100 py-2 px-3 text-sm focus:outline-none'
          type='text'
          placeholder='Enter username'
          ref={searchRef}
        />
        <button
          className='py-2 bg-sky-500 text-white text-sm'
          onClick={searchOnClick}
        >
          Search
        </button>
        {users.length > 0 && <UserList users={users} search={search} />}
      </div>
    </div>
  )
}

export default App
