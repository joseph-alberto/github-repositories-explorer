import { render, screen } from "@testing-library/react"
import App from "./App"

test("If App page component render element correctly", ()=>{
  render(<App/>)

  const SearchBox = screen.getByTestId("search-box")
  const SearchButton = screen.getByTestId("search-button")
  expect(SearchBox).toBeInTheDocument()
  expect(SearchButton).toBeInTheDocument()
})