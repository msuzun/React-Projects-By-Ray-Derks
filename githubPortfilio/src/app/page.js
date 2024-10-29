import Header from '../../Components/Header/Header.js'
import logo from '../../public/react-1.svg'
import Profile from '../../Components/Profile/Profile.js';
import RouterLink from 'next/link';
import './page.css'
export default function Home() {
  return (
    <>
    <Header logo={logo.src} />
    <div className="Home-container">
      <RouterLink href="/profile">
        <button className="Profile-link-button">Go to Profile</button>
      </RouterLink>
      <RouterLink href="/projects">
        <button className="Projects-link-button">Go to Projects Links</button>
      </RouterLink>
    </div>
  </>
  );
}
