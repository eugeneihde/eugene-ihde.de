import Breadcrumbs from '@mui/material/Breadcrumbs'
import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import styles from '../assets/css/main.module.css'
import { BreadcrumbProps } from '../config/content.config'

export default function CustomBreadcrumbs({ breadcrumbs }: BreadcrumbProps) {
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
                to={breadcrumb.link}
                className={styles.breadcrumbs__link}
              >
                {breadcrumb.label}
              </Link>
            :
              <Typography className={styles.breadcrumbs__typography}>
                {breadcrumb.label}
              </Typography>
            }
          </Box>
        ))}
      </Breadcrumbs>
    </>
  )
}
