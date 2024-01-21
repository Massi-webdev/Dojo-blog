import { useState } from "react";


const Home = () => {

    const [name, setName] = useState('Massi')
    const [age, setAge] = useState(33)
    const value = "Massi"

    const handleClick = (value) => {
        console.log('Hello, ' + value)
        setName('Assia');
        setAge(28)
    }

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <input type="text" />
            <button onClick={()=>handleClick(value)}>Click me</button>
            <p>{ name } is {age} years old</p>
        </div>
     );
}
 
export default Home;