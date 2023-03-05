import Hero from './Components/hero';
import Projects from './Components/projects';
import Specialities from './Components/specialities';
import TopNav from './Components/topNav';
import ScrollToTop from 'react-scroll-to-top';
import { GrArchlinux } from 'react-icons/gr';
import Contacts from './Components/contact';

function App() {
  return (
    <div className='App'>
      <TopNav />
      <Hero />
      <Projects />
      <Specialities />
      <Contacts />
      <ScrollToTop
        smooth
        component={<GrArchlinux className='m-auto' color='white' />}
        style={{
          backgroundColor: '#4c4c62',
        }}
      />
    </div>
  );
}

export default App;
