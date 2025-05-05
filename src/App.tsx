import { Box, Container, CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import styles from './assets/css/main.module.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import NotFoundPage from './pages/NotFoundPage';
import ExperienceDetailPage from './pages/experiences/ExperienceDetailPage';
import ImprintPage from './pages/ImprintPage';
import Footer from './components/Footer';
import ProjectDetailPage from './pages/projects/ProjectDetailPage';
import { themeProviderConfig } from './config/theme.config';

const App = () => {
  return (
    <>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <ThemeProvider theme={themeProviderConfig}>
          <CssBaseline />
          <Box className={styles.root__box}>
            <Navbar />
            <Container className={styles.root__container}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/experience" element={<ExperiencePage />} />
                <Route path="/experience/*" element={<ExperienceDetailPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/projects/*" element={<ProjectDetailPage />} />
                <Route path="/imprint" element={<ImprintPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Container>
          </Box>
          <Footer />
        </ThemeProvider>
      </Box>
    </>
  );
};

export default App;
