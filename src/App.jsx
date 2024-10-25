import './App.css';
import logo from '../src/img/Logo (4).svg'
import search from '../src/img/Search Icon (3).svg'
import cart from '../src/img/Cart Icon (3).svg'

function App() {
  return (
    <>
    <div className="main_block">
      <div className='header'>
        <img src={logo} alt="logo"></img>
        <p>Organink</p>
        <ul className='tab'>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Pages</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">News</a></li>
        </ul>
        <div className='block_input'>
          <input type="text"/>
          <img src={search} alt='' />
        </div>
        <div className='cart'>
          <img src={cart} alt='' />
          <p>cart(0)</p>
        </div>
      </div>      
</div>
    </>
  );
}

export default App;