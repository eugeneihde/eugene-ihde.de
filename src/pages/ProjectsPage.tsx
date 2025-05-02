import { Link } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import EastIcon from '@mui/icons-material/East'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

import styles from '../assets/css/main.module.css'
import { projectData } from '../config/content.config'
import { Helmet } from 'react-helmet'

const ProjectsPage = () => {
  return (
    <>
      <Helmet>
        <title>Eugene Ihde - Projects</title>
        <meta name='description' content='My Personal Projects - Personal Finance Tracker ・ IHK Certificate Generator' />
      </Helmet>
      <Box className={styles.header_center__container}>
        <Typography variant='h1'>Projects</Typography>
      </Box>
      <Box className={styles.content__container}>
        {Object.values(projectData).map((project, index) => (
          <Link
            key={index}
            to={`/projects/${project.projectRef}`}
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
                  {project.title}
                </Typography>
                <EastIcon />
              </Box>
              <Typography className={styles.experience_project_duration__typography}>
                RELEASE: {project.releaseDate}
              </Typography>
              <Box className={styles.experience_project_technology__container}>
                {project.technologies.map((item, index) => (
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

export default ProjectsPage