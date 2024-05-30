function NavMessage() {
  return (
    <button
      type="button"
      className="relative inline-flex items-center p-3 text-sm font-medium text-center text-black"
    >
      <i className="ri-mail-fill text-[26px]"></i>
      <span className="sr-only">Messages</span>
      <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-[#012970] border-2 border-white rounded-full top-0 -end-2 dark:border-gray-900">
        20
      </div>
    </button>
  );
}

export default NavMessage;
