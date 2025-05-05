import { Box, Typography } from '@mui/material'

import styles from '../assets/css/main.module.css'
import notFoundSvg from '../assets/media/notfound.svg'

export default function NotFoundPage() {
  return (
    <>
      <Box className={styles.notfound__container}>
        <Box
          className={styles.notfound__svg}
          src={notFoundSvg}
          component='img'
          alt='Not Found SVG'
          title='Not Found SVG'
          loading='eager'
        />
        <Typography variant='h1'>Not Found</Typography>
      </Box>
    </>
  )
}
