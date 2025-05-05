import { Link, redirect } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import { Helmet } from 'react-helmet'

import styles from '../../assets/css/main.module.css'
import { ProjectData, projectData } from '../../config/content.config'
import CustomBreadcrumbs from '../../components/CustomBreadcrumbs'

export default function ProjectDetailPage() {
  const [project, setProject] = useState<ProjectData | null>(null)

  useEffect(() => {
    const pathSegments: string[] = location.pathname.split('/')
    const companyParam: string = pathSegments[2]

    if (projectData[companyParam]) {
      setProject(projectData[companyParam])
    } else {
      window.location.href = '/projects'
      redirect('/projects')
    }
  }, [])

  return (
    <>
      {project !== null &&
        <>
          <Helmet>
            <title>Eugene Ihde - {project.title}</title>
            <meta name='description' content={`${project.title}・${project.description.substring(0, 100)}`} />
          </Helmet>
          <CustomBreadcrumbs breadcrumbs={[
              { label: 'Projects', link: '/projects' },
              { label: project.title}
          ]} />
          <Box className={styles.header_center__container}>
            <Typography
              variant='h1'
              className={styles.project_title__typography}
            >
              {project.title}
            </Typography>
            <Typography className={styles.project_release__typography}>
              RELEASE: {project.releaseDate}
            </Typography>
            <Box className={styles.experience_detail_technologies__container}>
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
            <Link
              to={project.sourceCode}
              target='_blank'
            >
              <Button
                variant='outlined'
                className={styles.project_sourcecode__button}
                endIcon={<GitHubIcon className={styles.button__icon} />}
              >
                Source Code
              </Button>
            </Link>
            <Box className={styles.project_description__container}>
              <Typography className={styles.project_company_description__typography}>
                {project.description.split('\n').map((line, index) => (
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
