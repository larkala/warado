import { useRouter } from 'react-router-dom';
import './NavBarComponent.css';

function NavBarComponent() {
  const router = useRouter();

  function handleClick(route: string) {
    router.push(`/${route}`);
  }

  return (
    <div className='navbar-container'>
      <div className='row'>
        <div className='col' onClick={() => handleClick('agenda')}>
          Agenda
        </div>

        <div className='col'>Warrado?</div>
      </div>
    </div>
  );
  }

export default NavBarComponent;
