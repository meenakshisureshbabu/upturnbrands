import { getByRole, getByTestId, render, screen, waitFor } from "@testing-library/react";
import Home from "./pages/Home/Home";

describe('should render Home component', () => { 
    test('Home component renders successfully', () => { 
        render(<Home user="Meenakshi"/>)
        
     })
     test('should render the button component', () => { 
        render(<Home user="Meenakshi"/>)
        const button = screen.getByText('Some other quote pls!!')
      })
      test('should render the title component', () => { 
        render(<Home user="Meenakshi"/>)
        const button = screen.getByRole("title")
      })

      test('should render the user name component', () => { 
        render(<Home user="Meenakshi"/>)
        const element = screen.getByRole("username")
        expect(element).toBeInTheDocument()
      })
 })





