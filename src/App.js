import React from 'react';
import { getImageUrl } from './component/utils'; // Import the getImageUrl function
import { useDarkLightMode } from './component/useDarkLightMode'; // Import useDarkLightMode function
import './App.css';
import About from './component/About';

function Avatar({ person, size }) {
  
  return (
    <div>
      <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
    </div>
  );
}

export default function App() {
  const { isDarkMode, toggleTheme } = useDarkLightMode(); // Destructuring isDarkMode and toggleTheme from useDarkLightMode
  return (
    <div className={isDarkMode ? 'avatar dark-mode' : 'avatar light'}>
      <About />
      <Avatar person={{ name: 'John Doe', imageId: 'OKS67lh' }} size={10} />
      <Avatar person={{ name: 'Rohit', imageId: '1bX5QH6'}} size={10}/>
      <button onClick={toggleTheme}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
}