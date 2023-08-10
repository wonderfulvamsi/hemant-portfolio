import s from './ModalProjectCard.module.scss';
import { BiLinkExternal } from 'react-icons/bi';
import Modal from '../../../components/Modal/Modal';
import Button from '../../../components/UIElements/Button/Button';
import { useParams } from 'react-router-dom';
import { useModal } from '../../../hooks/modalHook';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import placeholder from '../../../assets/placeholder.PNG'

const ModalProjectCard = () => {
  const location = useLocation();
  const { id } = useParams();
  const [project, setProject] = useState({})
  const backendLink = "https://hemant-portfolio-backend.netlify.app/.netlify/functions/api"
  
  useEffect(() => {
    const load = async()=>{
      await axios.get(backendLink+"/proj/"+id).then(res=>{console.log(res); setProject(res.data)});
    }
    load();
  }, [])

  const { _id, image, title, description, links } = project
  const { isVisible, toggleModal } = useModal();

  useEffect(() => {
    toggleModal();
  }, []);

  return (
    <Modal show={isVisible} onClose={toggleModal}>
      <div className={s.cardWrapper}>
        <LazyLoadImage
          alt="project-img"
          src={image}
          effect="blur"
          width="100%"
          wrapperClassName={s.image}
          placeholderSrc={placeholder}
        />

        <div className={s.cardBody}>
          <h3 className={s.title}>{title}</h3>
        </div>

        <div className={s.cardFooter}>
        <Link
          to={`/edit_project/${id}`}
          state={{ background: location }}
        >
            <Button
              style={{ width: '12rem' }}
              className="primary"
              target="_blank"
            >
              <BiLinkExternal /> &nbsp; Edit project
            </Button>
          </Link>

          {!!links && (
            <Button
              style={{ width: '12rem' }}
              className="primary"
              href={links[0]}
              target="_blank"
            >
              <BiLinkExternal /> &nbsp; Know more
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ModalProjectCard;
