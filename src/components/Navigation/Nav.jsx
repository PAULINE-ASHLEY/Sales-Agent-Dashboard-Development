import NavAvatar from './NavAvatar';
import NavMessage from './NavMessage';
import NavNotice from './NavNotice';

function Nav() {
  return (
    <nav className="header-nav ms-auto">
      <ul className="flex gap-x-4 items-center">
        <NavNotice />
        <NavMessage />
        <NavAvatar />
      </ul>
    </nav>
  );
}

export default Nav;
