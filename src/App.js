import './App.css';
import logo from './img/logo.png'
import {format} from 'date-fns'

function App() {
  return (
      <>
        <div>
          
        </div>
        <div className='header'>
          <div className='left'>
            <img src={logo} />
            <input type='text' style={{
              height: "15px",
            }}/>
          </div>
          <div className='right'>
            {format(new Date(), 'dd.MM.yyyy H:mm')}
          </div>
        </div>
        <div className='container'>
          <div className='block'>
            <img src='https://source.unsplash.com/gYl-UtwNg_I/1500x1500'/>
            <p>Hey</p>
          </div>
          <div className='block'>
            <img src='https://source.unsplash.com/rFKUFzjPYiQ/1500x1500'/>
            <p>Let's</p>
          </div>
          <div className='block'>
            <img src='https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d'
             />
             <p>Give</p>
          </div>
          <div className='block'>
            <img src='https://source.unsplash.com/ITjiVXcwVng/1500x1500' />
            <p>All</p>
          </div>
          <div className='block'>
            <img src='https://source.unsplash.com/3MNzGlQM7qs/1500x1500' />
            <p>You can</p>
          </div>
        </div>
      </>
    );
}

export default App;
