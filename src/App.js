import React, { useEffect, useState } from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const handleClick = async () => {
  try {
    const response = await fetch(`https://maker.ifttt.com/trigger/disco/with/key/xq3DfqXqlVq4hbbJrhY7a`);
    const data = await response.json();
    if (response.ok) {
      console.log(data.message);
    } else {
      console.error(data.message);
    }
  } catch (error) {
    console.error(`Error toggling disco`, error);
  }
};

const App = () => {
  const [toggleButton, setToggleButton] = useState(false);

  useEffect(() => {
    let interval= null;

    if (toggleButton) {
      interval = setInterval(() => {
        handleClick();
      }, 3000);
    } else if (interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [toggleButton]);

  return (
    <div style={{ textAlign: 'center', padding: '20px' , display:'flex',flexDirection:'column', alignItems : 'center' , gap:'30px' , minHeight:'70vh' }}>
      <h1 style={{ color: 'white' }}>Shobhak's Room Color</h1>
      <div style={{ marginTop: '20px' }}>
        {toggleButton ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' , cursor : 'pointer' }} onClick={() => setToggleButton(!toggleButton)}>
            <p style={{ color: 'white' }}>Light is On</p>
            <Player
              autoplay
              loop
              src="https://lottie.host/6633c25d-95ef-40ef-8f14-cbe7e53588a3/fCnd8tsyQe.json"
              style={{ height: '400px', width: '400px' }}
            >
            </Player>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' , cursor : 'pointer' }} onClick={() => setToggleButton(!toggleButton)}>
            <p style={{ color: 'white' }}>Light is Off</p>
              <Player
                autoplay
                loop
                src="https://lottie.host/6633c25d-95ef-40ef-8f14-cbe7e53588a3/fCnd8tsyQe.json"
                style={{ height: '400px', width: '400px' }}
              >
              </Player>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
