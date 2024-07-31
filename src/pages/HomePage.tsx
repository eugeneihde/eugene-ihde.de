import { Box, Typography } from '@mui/material'
import Typewriter from 'typewriter-effect'
import { Helmet } from "react-helmet"

import styles from '../assets/css/main.module.css'
import profilePicture from '../assets/media/profilepicture.png'

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Eugene Ihde - Private Portfolio</title>
        <meta name='description' content='Private Portfolio of Eugene Ihde - Frontend & Backend Web Developer' />
      </Helmet>
      <Box className={styles.homepage__container}>
        <Box className={styles.homepage_image__container}>
          <Box
            className={styles.homepage__image}
            component='img'
            src={profilePicture}
            alt='Profile Picture'
            title='Profile Picture'
            loading='eager'
          />
        </Box>
        <Box className={styles.homepage_content__container}>
          <Typography
            variant='h1'
            className={styles.homepage_content_header__typography}
          >
            Eugene Ihde
            <br />
            Frontend & Backend Web Developer
          </Typography>
          <Typography
            variant='h3'
            className={styles.homepage_content_typewriter__typography}
          >
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(50)
                  .changeDeleteSpeed(30)
                  .typeString('I work(ed) with TypeScript / JavaScript')
                  .pauseFor(1500)
                  .deleteChars(23)
                  .typeString('PHP')
                  .pauseFor(1500)
                  .deleteChars(3)
                  .typeString('ReactJs')
                  .pauseFor(1500)
                  .deleteChars(7)
                  .typeString('NextJs')
                  .pauseFor(1500)
                  .deleteChars(6)
                  .typeString('TYPO3')
                  .pauseFor(1500)
                  .start()
              }}
            />
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default HomePage