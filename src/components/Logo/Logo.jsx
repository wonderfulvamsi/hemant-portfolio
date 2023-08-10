import s from './Logo.module.scss';
import { routes } from '../../routes/BaseRoutes';
import { Link } from 'react-router-dom';

const Logo = ({ className }) => {
  return (
    <div className={className}>
      <Link to={routes.HOME} aria-label="site logo">
      <div style={{'display':'flex', 'gap':'10px'}}>
      <h1 style={{'font-size':'1.5rem'}}>Hemant</h1>
      <h1 style={{'font-size':'1.5rem','color':'#ff5e0e'}}>Lakshman</h1>
      </div>
      </Link>
    </div>
  );
};

export default Logo;
