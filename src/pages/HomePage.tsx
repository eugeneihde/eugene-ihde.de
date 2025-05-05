import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import Typewriter from 'typewriter-effect';
import { Helmet } from 'react-helmet';

import styles from '../assets/css/main.module.css';
import profilePicture from '../assets/media/profilepicture.jpg';
import { socialLinks } from '../config/content.config';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Eugene Ihde - ISO, BCM & Software Developer</title>
        <meta
          name="description"
          content="I am Eugene Ihde - I do Information Security, Business Continuity Management and Software Development"
        />
      </Helmet>
      <Box className="flex-container fd-column">
        <Box className={styles.homepage__container}>
          <Box className={styles.homepage_image__container}>
            <Box
              className={styles.homepage__image}
              component="img"
              src={profilePicture}
              alt="Profile Picture"
              title="Profile Picture"
              loading="eager"
            />
          </Box>
          <Box className={styles.homepage_content__container}>
            <Typography variant="h1" className={styles.homepage_content_header_name__typography}>
              Eugene Ihde
            </Typography>
            <Typography variant="h1" className={styles.homepage_content_header__typography}>
              Information Security Officer, Business Continuity Manager & Software Developer
            </Typography>
            <Typography variant="h3" className={styles.homepage_content_typewriter__typography}>
              <Typewriter
                options={{
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .changeDelay(50)
                    .changeDeleteSpeed(30)
                    .typeString('I do Information Security')
                    .pauseFor(1500)
                    .deleteChars(20)
                    .typeString('Business Continuity Management')
                    .pauseFor(1500)
                    .deleteChars(33)
                    .typeString('work with TypeScript / JavaScript')
                    .pauseFor(1500)
                    .deleteChars(23)
                    .typeString('Angular')
                    .pauseFor(1500)
                    .deleteChars(7)
                    .typeString('PHP')
                    .pauseFor(1500)
                    .deleteChars(3)
                    .typeString('React.js')
                    .pauseFor(1500)
                    .deleteChars(8)
                    .typeString('Next.js')
                    .pauseFor(1500)
                    .deleteChars(7)
                    .typeString('TYPO3')
                    .pauseFor(1500)
                    .start();
                }}
              />
            </Typography>
          </Box>
        </Box>
        <Box className={styles.homepage_social__container}>
          <Box className={styles.homepage_social_links__container}>
            {socialLinks.map((item, index) => (
              <Link key={index} target="_blank" to={item.link}>
                {item.icon}
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}
