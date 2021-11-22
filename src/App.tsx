import './App.css';
import { useEffect } from 'react';
import { TrackJS } from 'trackjs';

function App() {
  useEffect(() => {
    TrackJS.track('another-test');
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>hello world</p>
      </header>
    </div>
  );
}

export default App;
