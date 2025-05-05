import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import styles from '../assets/css/main.module.css'

export default function ImprintPage() {
  return (
    <>
      <Box className={styles.header_center__container}>
        <Typography variant='h1'>Imprint</Typography>
      </Box>
      <Box className={styles.imprint__container}>
        <Box className={styles.imprint__content__container}>
          <Typography variant='h3'>Information in accordance with §5 TMG</Typography>
          <Typography>
            Eugene Ihde
            <br />
            Frankfurter Chaussee 41
            <br />
            15370 Fredersdorf-Vogelsorf - Germany
          </Typography>
        </Box>
        <Box className={styles.imprint__content__container}>
          <Typography variant='h3'>Contact</Typography>
          <Typography>E-Mail: <Link to='mailto:contact@eugene-ihde.de'>contact@eugene-ihde.de</Link></Typography>
        </Box>
        <Box className={styles.imprint__content__container}>
          <Typography variant='h3'>Disclaimer</Typography>
          <Typography>
            We are responsible for the content of our websites in accordance with the general laws, in particular Section 7 Paragraph 1 of the Telemedia Act. All content is created with due care and to the best of our knowledge. If we refer to third-party websites via hyperlinks on our website, we cannot guarantee that the linked content will continue to be up-to-date, correct and complete, as this content is outside our area of responsibility and we have no influence on its future design. If you believe any content violates applicable law or is inappropriate, please let us know. The legal information on this site as well as all questions and disputes in connection with the design of this website are subject to the law of the Federal Republic of Germany.
          </Typography>
        </Box>
        <Box className={styles.imprint__content__container}>
          <Typography variant='h3'>Copyright</Typography>
          <Typography>
            The texts, images, photos, videos or graphics on our website are generally subject to copyright protection. Any unauthorized use (in particular the reproduction, processing or distribution) of this copyright-protected content is therefore prohibited. If you intend to use this content or any part of it, please contact us in advance using the details above. If we are not the owner of the required copyright usage rights ourselves, we will endeavor to arrange contact with the authorized person.
          </Typography>
        </Box>
      </Box>
    </>
  )
}
