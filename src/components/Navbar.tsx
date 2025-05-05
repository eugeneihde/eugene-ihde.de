import { AppBar, Box, Button, Toolbar } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'

import styles from '../assets/css/main.module.css'

export default function Navbar() {
  const pathname = useLocation().pathname

  return (
    <>
      <AppBar
        component='nav'
        color='transparent'
        className={styles.navbar__appbar}
      >
        <Toolbar className={styles.navbar__toolbar}>
          <Box className={styles.navbar_button__container}>
            <Link to='/'>
              <Button className={`${styles.navbar__button} ${pathname === '/' ? styles.navbar_active__button : ''}`}>
                Home
              </Button>
            </Link>
            <Link to='/experience'>
              <Button className={`${styles.navbar__button} ${pathname === '/experience' ? styles.navbar_active__button : ''}`}>
                Experience
              </Button>
            </Link>
            <Link to='/projects'>
              <Button className={`${styles.navbar__button} ${pathname === '/projects' ? styles.navbar_active__button : ''}`}>
                Projects
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}
