import { render, screen, fireEvent } from "@testing-library/react"
import UserList from "./UserList"
import { User } from "../interfaces"
import App from "../App"

test("Initial UserList component default value test", () => {
  const search = ""
  const users: User[] = []

  render(<UserList users={users} search={search} />)
  const ShowingUsersText = screen.getByTestId("showing-users-text")
  expect(ShowingUsersText.classList.contains("hidden")).toBe(true)
})

test("Did UserList Component limit 5 users", async () => {
  render(<App />)

  const SearchBox: HTMLInputElement = screen.getByTestId("search-box")
  SearchBox.value = "a"

  const SearchButton = screen.getByTestId("search-button")
  fireEvent.click(SearchButton)
  const DropdownContainer = await screen.findAllByTestId("dropdown-container")
  expect(DropdownContainer.length).toBe(5)
})
