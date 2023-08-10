import { lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
//modals
import ModalProjectCard from '../scenes/Projects/ModalProjectCard/ModalProjectCard';
import ModalProjectAddCard from '../scenes/Projects/ModalProjectCard/ModalProjectAddCard';
import ModalProjectEditCard from '../scenes/Projects/ModalProjectCard/ModalProjectEditCard';
//scenes
const Home = lazy(() => import('../scenes/Home/Home'));
const About = lazy(() => import('../scenes/About/About'));
const Projects = lazy(() => import('../scenes/Projects/Projects'));
const Resume = lazy(() => import('../scenes/Resume/Resume'));

export const routes = {
  HOME: '/',
  ABOUT: '/about',
  PROJECTS: '/projects',
  PROJECT: '/project/:id',
  ADD_PROJECT : '/add_project',
  EDIT_PROJECT : '/edit_project/:id',
  RESUME: '/resume',
};

const BaseRoutes = () => {
  const location = useLocation();
  const background = location.state?.background;

  return (
    <>
      <Routes location={background || location}>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.ABOUT} element={<About />} />
        <Route path={routes.PROJECTS} element={<Projects />} />
        <Route path={routes.PROJECT} element={<ModalProjectCard />} />
        <Route path={routes.ADD_PROJECT} element={<ModalProjectAddCard />} />
        <Route path={routes.EDIT_PROJECT} element={<ModalProjectEditCard />} />
        <Route path={routes.RESUME} element={<Resume />} />
      </Routes>

      {background && (
        <Routes>
          <Route path={routes.PROJECT} element={<ModalProjectCard />} />
          <Route path={routes.ADD_PROJECT} element={<ModalProjectAddCard />} />
          <Route path={routes.EDIT_PROJECT} element={<ModalProjectEditCard />} />
        </Routes>
      )}
    </>
  );
};

export default BaseRoutes;
