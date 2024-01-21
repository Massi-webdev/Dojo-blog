const Home = () => {

    const handleClick = (e) => {
        console.log('Hello Ninjas', e)
    }
    
    const handleClickAgain = (name, e) => {
        console.log('Hello, ' + name, e)
    }



    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e)=>{handleClickAgain('Massi', e)}}>Click me again</button>
        </div>
     );
}
 
export default Home;