import Background from 'components/background/Background';
import Desktop from 'components/Desktop';
import Header from 'components/Header';
import { Icon } from 'components/Icon';
import { createContext, useState } from 'react';
import 'styles/global.scss';

import {
  BsPersonFill,
  BsFillPencilFill,
  BsFileCodeFill,
  BsFillTelephoneFill
} from "react-icons/bs";
import Introduce from 'pages/Introduce';
import { windowType } from 'types/type';

interface ContextProps {
  isDark:boolean;
  isDarkHandler: (theme:boolean) => void;
}

export const defaultContext = createContext<ContextProps>({
  isDark:false, 
  isDarkHandler:(theme)=>{},
});

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const [windowStack, setWindowStack] = useState<windowType[]>([]);

  const isDarkHandler = (theme:boolean) => { setIsDark(theme); }
  
  return (
    <div className="App">
      <defaultContext.Provider value={{isDark, isDarkHandler }}>
        <Background isDark={isDark}/>
        <Header/>
          <Desktop>
              <Icon 
                title={"Introduce"} 
                icon={<BsPersonFill/>} 
                page={<Introduce/>} 
                pid={0} 
                windowHandler={setWindowStack}
              />
              <Icon 
                title={"Career"} 
                icon={<BsFillPencilFill/>} 
                page={<Introduce/>} 
                pid={1} 
                windowHandler={setWindowStack}
              />
              <Icon 
                title={"Projects"} 
                icon={<BsFileCodeFill/>} 
                page={<Introduce/>} 
                pid={2} 
                windowHandler={setWindowStack}
              />
              <Icon 
                title={"Content"} 
                icon={<BsFillTelephoneFill/>} 
                page={<Introduce/>} 
                pid={3} 
                windowHandler={setWindowStack}
              />
            
          </Desktop>
          {windowStack.map(window => <div key={window.pid}>{window.window}</div>)}
      </defaultContext.Provider>
    </div>  
  );
}
export default App;
