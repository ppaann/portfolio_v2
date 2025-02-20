const navTabs = ['Home', 'Projects', 'About'];
export const Header = () => {
  return (
    <nav className='flex justify-center items-center fixed top-3 w-full z-10'>
      <ul className='flex gap-4 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur'>
        {navTabs.map((tab) => (
          <li key={tab} className='nav-item'>
            <a href={`#${tab}`}>{tab}</a>
          </li>
        ))}
        <li className='nav-item bg-white text-gray-900 rounded-full hover:bg-white/70 hover:text-gray-900'>
          <a href='#'>Contact</a>
        </li>
      </ul>
    </nav>
  );
};
