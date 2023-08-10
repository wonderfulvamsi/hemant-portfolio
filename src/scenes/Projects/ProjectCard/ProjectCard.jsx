import s from './ProjectCard.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import placeholder from '../../../assets/placeholder.PNG'

const ProjectCard = ({ _id, image, title, description, links }) => {
  const location = useLocation();

  return (
    <li className={s.card}>
      <div className={s.cardWrapper}>
        <Link
          to={`/project/${_id}`}
          state={{ background: location }}
        >
          <LazyLoadImage
            alt="card-img"
            effect="blur"
            src={image}
            width="100%"
            style={{ minHeight: '10rem', maxHeight:'30rem' }}
            placeholderSrc={placeholder}
          />
        </Link>

        <div className={s.cardBody}>
          <h3 className={s.title}>{title}</h3>
          <p className={s.description}>{description}</p>
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
