function App(props) {
    const currDate = new Date();

    return (
        <div>
        <h1>Hello World</h1>
       
        <h2>{currDate.toLocaleTimeString()}.</h2>
        <h3> {currDate.toDateString()}.</h3>
        </div>
    );
  }
  
  export default App;
