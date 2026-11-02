import { Link } from 'react-router-dom';
import Icon from '../components/Icons.jsx';
import { FuranMolecule } from '../components/MoleculeArt.jsx';
import { usePageTitle } from '../components/Common.jsx';

export default function NotFound() {
  usePageTitle('Page not found');
  return (
    <section className="notfound">
      <div className="container">
        <FuranMolecule className="notfound__art" />
        <span className="eyebrow">Error 404</span>
        <h1>This reaction didn’t yield a page.</h1>
        <p className="lead">The page you’re looking for doesn’t exist or has moved.</p>
        <Link to="/" className="btn btn--primary">Back to home <Icon name="arrow" /></Link>
      </div>
    </section>
  );
}
