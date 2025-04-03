import React from 'react';
import './CardMini.css'; // Assuming the CSS is in a separate file

interface CardMiniProps {
  title: string;
  description: string;
  tools?: string[];
}

const CardMini: React.FC<CardMiniProps> = ({ title, description, tools }) => {
  return (
    <div className='card-gradient-border rounded-lg p-6 shadow-lg relative card-gradient-border transition duration-300 hover:shadow-glow-sm-cyan dark:hover:shadow-glow-md-purple cursor-pointer'>
      <div
        style={{ padding: '1rem', background: '#fff', borderRadius: '0.5rem' }}
      >
        <h3 className='font-bold text-xl mb-2 text-gray-900 dark:text-white'>
          {title}
        </h3>
        <p className='text-gray-700 dark:text-gray-300 text-base mb-4'>
          {description}
        </p>
        {tools && (
          <div className='flex flex-wrap gap-2 mb-4'>
            {tools.map((tool, index) => (
              <span
                key={index}
                className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-700 bg-gray-200 dark:bg-gray-800 dark:text-gray-200'
              >
                {tool}
              </span>
            ))}
          </div>
        )}
        <div className='flex space-x-2'>
          <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-cyan-600 bg-cyan-200 dark:bg-cyan-800 dark:text-cyan-200'>
            #AI
          </span>
          <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-200 dark:bg-purple-800 dark:text-purple-200'>
            #ComponentLibrary
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardMini;
