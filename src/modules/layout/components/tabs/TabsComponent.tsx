'use client';
import { useState, useEffect, useRef } from 'react';
const TabsComponent = ({ items } : any) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const firstBtnRef = useRef<any>(null);

  useEffect(() => {
    firstBtnRef.current!.focus()
  }, []);

  return (
    <div className='w-full'>
      <div className='w-full px-4'>
        <div className='mb-4 flex items-center justify-center font-normal text-base space-x-2 lg:space-x-6'>
          {items.map((item : any, index : number) => (
            <button
              ref={index === 0 ? firstBtnRef : null}
              key={index}
              onClick={() => setSelectedTab(index)}
              className={`uppercase inline-block hover:underline hover:underline-offset-4 rounded-lg outline-none px-4 text-center ${
                selectedTab === index ? 'bg-primary text-primary-content' : ''
              } `}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className='w-full justify-center'>
          {items.map((item : any, index : number) => (
            <div key={index} className= {`${selectedTab === index ? 'w-full xsmall:inline-flex items-start xsmall:space-x-10' : 'hidden'}`}>
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabsComponent;