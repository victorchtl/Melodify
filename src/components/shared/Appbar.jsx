import { AppBar, Container, IconButton, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

function Appbar() {
  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Appbar