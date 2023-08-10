import s from './Projects.module.scss';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import ProjectCard from './ProjectCard/ProjectCard';
import { Link, useLocation } from 'react-router-dom';
import Button from '../../components/UIElements/Button/Button';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Projects = () => {
  const location = useLocation();
  const [projects, setProjects] = useState([])
  const backendLink = "https://hemant-portfolio-backend.netlify.app/.netlify/functions/api"
  
  useEffect(() => {
    const load = async()=>{
      await axios.get(backendLink+"/all_projs").then(res=>{console.log(res); setProjects(res.data)});
    }
    load();
  }, [])

  return (
    <BaseLayout>
      <div className={s.content}>
        <h1 className={s.title}>
          My Recent <strong className={s.purple}>Works</strong>
        </h1>
        <p className={s.subtitle}>
          Here are a few projects I've worked on recently.
        </p>

        <ul className={s.projects}>
          {projects.map((props) => (
            <ProjectCard key={props.id} {...props} />
          ))}
        </ul>
        <Link
          to={`/add_project`}
          state={{ background: location }}
        >
          <Button
            style={{ width: '12rem' }}
            className="primary"
            target="_blank"
          >
           Add project
          </Button>
        </Link>

      </div>
    </BaseLayout>
  );
};

export default Projects;
