import React, { useEffect } from "react"
import Paper from "@mui/material/Paper"
import BottomNavigation from "@mui/material/BottomNavigation"
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import SearchIcon from "@mui/icons-material/Search"
import MovieIcon from "@mui/icons-material/Movie"
import TvIcon from "@mui/icons-material/Tv"
import WhatshotIcon from "@mui/icons-material/Whatshot"
import { useHistory } from "react-router"

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0)
  const history = useHistory()

  useEffect(() => {
    if (value === 0) history.push("/")
    else if (value === 1) history.push("/movies")
    else if (value === 2) history.push("/series")
    else if (value === 3) history.push("/serach")
  }, [value, history])
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        sx={{ bottom: 0, bgcolor: "#f1faee" }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
      >
        <BottomNavigationAction
          style={{ color: "#e63946" }}
          label="Trending"
          icon={<WhatshotIcon />}
        />
        <BottomNavigationAction
          style={{ color: "#e63946" }}
          label="Movie"
          icon={<MovieIcon />}
        />
        <BottomNavigationAction
          style={{ color: "#e63946" }}
          label="T.V series"
          icon={<TvIcon />}
        />
        <BottomNavigationAction
          style={{ color: "#e63946" }}
          label="Search"
          icon={<SearchIcon />}
        />
      </BottomNavigation>
    </Paper>
  )
}
