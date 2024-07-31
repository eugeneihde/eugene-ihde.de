import { Box, Button, Typography } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'

import styles from '../assets/css/main.module.css'

const Footer = () => {
  const pathname = useLocation().pathname

  return (
    <>
      <Box className={styles.footer__container}>
        <Typography className={styles.footer_copyright__typography}>
          © {new Date().getFullYear()}・Eugene Ihde
        </Typography>
        <Link to='/imprint'>
          <Button className={`${styles.navbar__button} ${pathname === '/imprint' ? styles.navbar_active__button : ''}`}>
            Imprint
          </Button>
        </Link>
      </Box>
    </>
  )
}

export default Footer