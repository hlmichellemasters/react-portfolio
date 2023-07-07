import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/michelle-M.png';
import './index.scss';

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm {''}
          <img src={LogoTitle} alt="developer" />
          ichelle
          <br />
          software developer
        </h1>
        <h2>
          Frontend Developer / Python Developer / Machine-Learning Engineer /
          Biologist
        </h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  );
};

export default Home;
