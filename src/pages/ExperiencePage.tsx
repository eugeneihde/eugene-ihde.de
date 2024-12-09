import { Box, Typography } from '@mui/material'
import EastIcon from '@mui/icons-material/East'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import { Link } from 'react-router-dom'

import styles from '../assets/css/main.module.css'
import { workExperiences } from '../config/content.config'
import { Helmet } from 'react-helmet'

const ExperiencePage = () => {
  return (
    <>
      <Helmet>
        <title>Eugene Ihde - Experience</title>
        <meta name='description' content='My Work Experience - Ihde Webservices ・ Publicplan GmbH ・ Brandung GmbH' />
      </Helmet>
      <Box className={styles.header_center__container}>
        <Typography variant='h1'>Work Experience</Typography>
      </Box>
      <Box className={styles.content__container}>
        {workExperiences.map((experience, index) => (
          <Link
            key={index}
            to={`/experience/${experience.companyRef}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Box
              key={index}
              className={styles.experience_project__container}
            >
              <Box className={styles.experience_project_header__container}>
                <Typography
                  variant='h2'
                  className={styles.experience_project_title__typography}
                >
                  {experience.jobTitle}・<Box component='span' className={styles.experience_project_title_company__typography}>{experience.company}</Box>
                </Typography>
                <EastIcon />
              </Box>
              <Typography className={styles.experience_project_duration__typography}>
                {experience.jobDuration}
              </Typography>
              <Box className={styles.experience_project_technology__container}>
                {experience.technologies.map((item, index) => (
                  <Box
                    key={index}
                    sx={{ border: `2px solid ${item.color}` }}
                    className={styles.technology__container}
                  >
                    <FiberManualRecordIcon
                      sx={{ color: item.color }}
                      className={styles.technology__icon}
                    />
                    <Typography className={styles.technology__typography}>{item.type}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Link>
        ))}
      </Box>
    </>
  )
}

export default ExperiencePage