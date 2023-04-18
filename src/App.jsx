import { useEffect, useRef } from 'react'
import {gsap} from 'gsap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss'

function App() {
  const listItems = useRef([]);

  useEffect(() => {
    gsap.fromTo(listItems.current,{
      opacity:0
    }, {
      opacity: 1,
      duration: 1,
      stagger: 0.2
    });
  }, []);
  

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
         <ul>
      <li ref={el => listItems.current[0] = el}>Item 1</li>
      <li ref={el => listItems.current[1] = el}>Item 2</li>
      <li ref={el => listItems.current[2] = el}>Item 3</li>
      <li ref={el => listItems.current[3] = el}>Item 4</li>
      <li ref={el => listItems.current[4] = el}>Item 5</li>
    </ul>
        </div>
        <div className="col-6">Testing</div>
      </div>
    </div>
  )
}

export default App
