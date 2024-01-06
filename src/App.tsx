import { IoIosSearch } from 'react-icons/io';

import Capitais from './components/Capitais';
import Card from './components/Card';
import Title from './components/Title';

function App() {
  return (
    <>
      <Title />
      <Card />

      <div className='wrapper'>
        <IoIosSearch className='icon' />
        <input
          type='text'
          placeholder='Insira o nome da cidade'
          className='input'
        />
      </div>

      <Capitais />
    </>
  );
}

export default App;
