import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

import styles from '../../assets/css/main.module.css'
import { projectData } from '../../config/content.config'
import CustomBreadcrumbs from '../../components/CustomBreadcrumbs'
import { Helmet } from 'react-helmet'

const ProjectDetailPage = () => {
  const [project, setProject] = useState<'ihk_certificate_generator' | 'personal_finance_tracker' | undefined>(undefined)

  useEffect(() => {
    const pathSegments = location.pathname.split('/')
    const companyParam = pathSegments[2]

    if (
      typeof companyParam !== 'undefined' &&
      (
        companyParam === 'ihk_certificate_generator' ||
        companyParam === 'personal_finance_tracker'
      )
    ) {
      setProject(companyParam)
    } else {
      window.location.href = '/projects'
    }
  }, [])

  return (
    <>
      {project !== undefined &&
        <>
          <Helmet>
            <title>Eugene Ihde - {projectData[project].title}</title>
            <meta name='description' content={`${projectData[project].title}・${projectData[project].description.substring(0, 100)}`} />
          </Helmet>
          <CustomBreadcrumbs breadcrumbs={[
              { label: 'Projects', link: '/projects' },
              { label: projectData[project].title}
          ]} />
          <Box className={styles.header_center__container}>
            <Typography
              variant='h1'
              className={styles.project_title__typography}
            >
              {projectData[project].title}
            </Typography>
            <Typography className={styles.project_release__typography}>
              RELEASE: {projectData[project].releaseDate}
            </Typography>
            <Box className={styles.experience_detail_technologies__container}>
              {projectData[project].technologies.map((item, index) => (
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
            <Link
              to={projectData[project].sourceCode}
              target='_blank'
            >
              <Button
                variant='outlined'
                className={styles.project_sourcecode__button}
              >
                Source Code
                <GitHubIcon className={styles.button__icon} />
              </Button>
            </Link>
            <Box className={styles.project_description__container}>
              <Typography className={styles.project_company_description__typography}>
                {projectData[project].description.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}<br />
                  </React.Fragment>
                ))}
              </Typography>
            </Box>
          </Box>
        </>
      }
    </>
  )
}

export default ProjectDetailPage