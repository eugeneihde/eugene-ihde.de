import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useLocation } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

import styles from '../../assets/css/main.module.css'
import CustomBreadcrumbs from '../../components/CustomBreadcrumbs'
import { Companies, companies, workExperiences } from '../../config/content.config'


const ExperienceDetailPage = () => {
  const location = useLocation()
  const [company, setCompany] = useState<Companies | undefined>(undefined)

  useEffect(() => {
    const pathSegments = location.pathname.split('/')
    const companyParam = pathSegments[2]

    if (typeof companyParam !== 'undefined' && companies.includes(companyParam)) {
      setCompany(companyParam as Companies)
    } else {
      window.location.href = '/experience'
    }
  }, [location])

  return (
    <>
      {company !== undefined &&
        <>
          <Helmet>
            <title>Eugene Ihde - {workExperiences[company].company}</title>
            <meta name='description' content={`${workExperiences[company].company}・${workExperiences[company].description.substring(0, 100)}`} />
          </Helmet>
          <CustomBreadcrumbs breadcrumbs={[
              { label: 'Experience', link: '/experience' },
              { label: workExperiences[company].company}
          ]} />
          <Box className={styles.experience_detail__container}>
            <Link
              to={workExperiences[company].companyLink}
              target='_blank'
            >
                <Box
                  className={styles.experience_detail__image}
                  component='img'
                  src={workExperiences[company].logo || ''}
                  alt='Company Logo'
                  title='Company Logo'
                  loading='eager'
                />
            </Link>
            <Typography variant='h2'>{workExperiences[company].jobTitle}</Typography>
            <Typography className={styles.experience_detail_duration__typography}>
              {workExperiences[company].jobDuration}
            </Typography>
            <Box className={styles.experience_detail_technologies__container}>
              {workExperiences[company].technologies.map((item, index) => (
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
            <Box className={styles.experience_detail_description__container}>
              <Typography className={styles.project_company_description__typography}>
                {workExperiences[company].description.split('\n').map((line, index) => (
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

export default ExperienceDetailPage