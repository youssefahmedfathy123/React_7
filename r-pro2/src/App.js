import './App.css';
import { useEffect,useState } from 'react';
import MiniMap from './Components/MiniMap';
import { people } from './Components/text';
function App() {
const [state,setState] = useState(people) 
const [count,setCount] = useState(0)
// useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
//     .then( x => x.json())
//     .then(x => setState(x))
// },[])

const increase = () => {
if(count == state.length - 1){
  setCount(0)
}else{
  setCount(x => x +1)
}
}
const decrease = () => {
  if(count == 0){
    setCount(state.length - 1)
  }else{
    setCount(x => x -1)
  }
}

const {name,p} = people[count]

const rand = () => {
setCount(Math.floor(Math.random()*people.length))
}
    if(state.length != 0){
          return (
<div className='container'>

<div style={{height:'400px'}} className='bg-info p-3 m-3 d-flex align-items-center justify-content-between'>

<button onClick={()=>decrease()}className='btn mx-5 bg-danger text-light'>left</button>

<span className='d-flex flex-column '>
<h5 className='bg-success p-2 rounded text-center'>{name}</h5>
<h3 className='bg-secondary p-2 rounded'>{p}</h3>
</span>



<button onClick={()=>increase()}className='btn mx-5 bg-danger text-light'>right</button>

</div>
<button className='btn bg-warning' onClick={rand}>Random</button>
</div>
  );
    }

}


export default App;