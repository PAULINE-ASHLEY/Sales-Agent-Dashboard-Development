import Logo from './Logo/Logo';
import Nav from './Navigation/Nav';
import SearchBar from './SearchBar/SearchBar';

function Header() {
  return (
    <header className="fixed top-0 items-center grid grid-cols-3 gap-x-6 text-[32px] px-6 cursor-pointer text-[#012970] transition-all duration-500 h-[60px] bg-[#fff] z-40 shadow-[0px_2px_20px_rgba(1,41,112,0.1)] w-full">
      {/* This is the logo section */}
      <Logo />
      {/* This is the searchbar section */}
      <SearchBar />
      {/* This is the Navigation bar section */}
      <Nav />
    </header>
  );
}

export default Header;
