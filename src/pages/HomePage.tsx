import { Link } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import Typewriter from 'typewriter-effect'
import { Helmet } from "react-helmet"

import styles from '../assets/css/main.module.css'
import profilePicture from '../assets/media/profilepicture.png'
import { socialLinks } from '../config/content.config'

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Eugene Ihde - Private Portfolio</title>
        <meta name='description' content='Private Portfolio of Eugene Ihde - Business Continuity Manager & Software Developer' />
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
            className={styles.homepage_content_header_name__typography}
          >
            Eugene Ihde
          </Typography>
          <Typography
            variant='h1'
            className={styles.homepage_content_header__typography}
          >
            Business Continuity Manager & Software Developer
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
                  .typeString('I work with TypeScript / JavaScript')
                  .pauseFor(1500)
                  .deleteChars(23)
                  .typeString('PHP')
                  .pauseFor(1500)
                  .deleteChars(3)
                  .typeString('React.js')
                  .pauseFor(1500)
                  .deleteChars(7)
                  .typeString('Next.js')
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
      <Box className={styles.homepage_social__container}>
        <Box className={styles.homepage_social_links__container}>
          {socialLinks.map((item, index) => (
            <Link
              key={index}
              target='_blank'
              to={item.link}
            >
              {item.icon}
            </Link>
          ))}
        </Box>
      </Box>
    </>
  )
}

export default HomePage