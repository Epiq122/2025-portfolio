import './index.css';
import LoadingScreen from './components/loading-screen';
import { useState } from 'react';
function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>{!isLoading && <LoadingScreen onComplete={() => setIsLoading(true)} />}</>
  );
}

export default App;
