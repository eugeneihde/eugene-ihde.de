import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, redirect, useLocation } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

import styles from '../../assets/css/main.module.css'
import CustomBreadcrumbs from '../../components/CustomBreadcrumbs'
import { ExperienceData, workExperiences } from '../../config/content.config'


export default function ExperienceDetailPage() {
  const location = useLocation()
  const [company, setCompany] = useState<ExperienceData | null>(null)

  useEffect(() => {
    const pathSegments: string[] = location.pathname.split('/')
    const companyParam: string = pathSegments[2]

    if (workExperiences[companyParam]) {
      setCompany(workExperiences[companyParam])
    } else {
      redirect('/experience')
    }
  }, [location])

  return (
    <>
      {company !== null &&
        <>
          <Helmet>
            <title>Eugene Ihde - {company.company}</title>
            <meta name='description' content={`${company.company}・${company.description.substring(0, 100)}`} />
          </Helmet>
          <CustomBreadcrumbs breadcrumbs={[
              { label: 'Experience', link: '/experience' },
              { label: company.company}
          ]} />
          <Box className={styles.experience_detail__container}>
            <Link
              to={company.companyLink}
              target='_blank'
            >
                <Box
                  className={styles.experience_detail__image}
                  component='img'
                  src={company.logo || ''}
                  alt='Company Logo'
                  title='Company Logo'
                  loading='eager'
                />
            </Link>
            <Typography variant='h2'>{company.jobTitle}</Typography>
            <Typography className={styles.experience_detail_duration__typography}>
              {company.jobDuration}
            </Typography>
            <Box className={styles.experience_detail_technologies__container}>
              {company.technologies.map((item, index) => (
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
                {company.description.split('\n').map((line, index) => (
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
