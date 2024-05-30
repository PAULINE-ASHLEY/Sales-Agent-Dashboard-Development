function Logo() {
  // const handleToggleSideBar = () => {
  //   document.body.classList.toggle('toggle-sidebar');
  // };
  return (
    <div className="flex items-center justify-between">
      <a href="/" className="flex items-center leading-none xl:w-[280px]">
        <span className="block text-[18px] font-bold text-[#012970] font-['Nunito']">
          Sales Agent Dashboard
        </span>
      </a>
      <i
        className="ri-menu-line text-[26px] p-l-[10px] cursor-pointer text-[#012970]"
        // onClick={handleToggleSideBar}
      ></i>
    </div>
  );
}

export default Logo;
