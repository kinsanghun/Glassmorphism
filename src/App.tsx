import Background from 'components/background/Background';
import Header from 'components/Header';
import { createContext, useState } from 'react';
import 'styles/global.scss';

const defaultContext = createContext({});
const App = () => {
  const [isDark, setIsDark] = useState(true);
  return (
    <div className="App" onClick={()=>{setIsDark(prev => !prev)}}>
      <Background isDark={isDark}/>
      <Header/>
    </div>
  );
}

export default App;
