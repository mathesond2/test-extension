import './App.css';
import { useEffect, useState } from 'react';
import { TrackJS } from 'trackjs';

function App() {
  const [isTracking, setIsTracking] = useState(false);

  useEffect(() => {
    if (isTracking) {
      TrackJS.track('another-test');
    }
  }, [isTracking]);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setIsTracking(true)}>hello world</button>
      </header>
    </div>
  );
}

export default App;
