import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'

import styles from '../../assets/css/main.module.css'
import { projectDetailData } from '../../config/content.config'
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
  }, [location])

  return (
    <>
      {project !== undefined &&
        <>
          <Helmet>
            <title>Eugene Ihde - {projectDetailData[project].title}</title>
            <meta name='description' content={`${projectDetailData[project].title}・${projectDetailData[project].description.substring(0, 100)}`} />
          </Helmet>
          <CustomBreadcrumbs breadcrumbs={[
              { label: 'Projects', link: '/projects' },
              { label: projectDetailData[project].title}
          ]} />
          <Box className={styles.header_center__container}>
            <Typography
              variant='h1'
              className={styles.project_title__typography}
            >
              {projectDetailData[project].title}
            </Typography>
            <Link
              to={projectDetailData[project].sourceCode}
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
                {projectDetailData[project].description.split('\n').map((line, index) => (
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