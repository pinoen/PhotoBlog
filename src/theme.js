import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1760a5',
      light: 'skyblue'
    },
    secondary: {
      main: '#15c630',
    },
    otherColor: {
      main: '#999'
    }
  }
})

// Example of a personalized element
const CustomButton = styled(Button)({
  backgroundColor: 'skyblue',
  color: '#888',
  margin: 5,
  "&:hover": {
    backgroundColor: 'lightblue'
  },
  "&:disabled": {
    backgroundColor: 'gray',
    color: 'white'
  }
})