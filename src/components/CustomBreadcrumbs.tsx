import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import { Box, Link, Typography } from '@mui/material'

import styles from '../assets/css/main.module.css'
import { BreadcrumbProps } from '../config/content.config'

const CustomBreadcrumbs: React.FC<BreadcrumbProps> = ({ breadcrumbs }) => {
  return (
    <>
      <Breadcrumbs
        separator='→'
        className={styles.breadcrumbs_breadcrumbs}
      >
        {breadcrumbs.map((breadcrumb, index) => (
          <Box key={index}>
            {typeof breadcrumb.link !== 'undefined' ?
              <Link
                underline='hover'
                href={breadcrumb.link}
                className={styles.breadcrumbs__link}
              >
                {breadcrumb.label}
              </Link>
            :
              <Typography className={styles.breadcrumbs__link}>
                {breadcrumb.label}
              </Typography>
            }
          </Box>
        ))}
      </Breadcrumbs>
    </>
  )
}

export default CustomBreadcrumbs