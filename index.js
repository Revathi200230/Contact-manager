import React , {useState} from 'react';
import ReactDOM from 'react-dom';
import './App.css';



function AddPersonForm(props) {
      const [ person, setPerson ] = useState('');
        
      function handleChange(e) {
        setPerson(e.target.value);
      }
        
      function handleSubmit(e) {
        props.handleSubmit(person);
        setPerson('');
        e.preventDefault();
      }
      return (
      <div>
            <h1> Contact Manager</h1>
       <form onSubmit={handleSubmit}>
          <input type="text" className='form'
            placeholder="Add new contact" 
            onChange={handleChange} 
            value={person} />
          <button type="submit">Add</button>
        </form>
        </div>
      );
    }
    
    function PeopleList(props) {
      const arr = props.data;
      const listItems = arr.map((val, index) =>
        <li key={index}>{val}</li>
      );
      return <ol className='lists'>{listItems}</ol>;
    }
    
    function ContactManager(props) {
      const [contacts, setContacts] = useState(props.data);
    
      function addPerson(name) {
        setContacts([...contacts, name]);
      }
    
      return (
        <div>
          <AddPersonForm handleSubmit={addPerson} />
          <PeopleList data={contacts} />
        </div>
      );
    }
    const contacts = ["John", "Varun", "Naveen"];
    
    ReactDOM.render(
      <ContactManager data={contacts} />, 
      document.getElementById('root')
    );
      











 //lists.....

// const arr = ["apple", "car", "orange"];

// function MyList(props) {
//       const arr = props.data;
//       const listItems = arr.map((val, index) =>
//         <li key = {index}> {val}</li>
//       );
//       return <ul>{listItems}</ul>;
//     }
   
//     const el = <MyList data={arr} />; 
    
//     ReactDOM.render(
//       el, 
//       document.getElementById('root')
//     );


// forms .....

// const App = () =>{
//       let [sum,setSum] = useState(0);
//       let [num,setNum] = useState(0);


// function handleChange(e) {
//       setNum(e.target.value);
//     }
  
//     function handleSubmit(e) {
//       setSum(sum + Number(num));
//       e.preventDefault();
//     }
  
//     return <form onSubmit={handleSubmit}>
//     <input type="number" value={num} onChange={handleChange} />
//     <input type="submit" value="Add" />
//     <p> Sum is {sum} </p>
//     </form>;
// }



//km to miles.........

// const App = () =>{
//   let [km,setKm] = useState(0);

//   function setChange (e){
//     setKm(e.target.value);
//   }

//   function convert(km) {
//     return (km/1.609).toFixed(2);
//   }

//   return <div>
//   <input type="text" value={km} onChange={setChange} />
//   <p> {km} km is {convert(km)} miles </p>
//   </div>;
// }


// Hook method (function) ;; counter app........

// import React, {useState , useEffect} from 'react';
// const App = () =>{
//    let [counter, setCounter] = useState(0);

//    // life methods..
   
//    useEffect(() => {
//     alert("Number of clicks: " + counter);
//   });

//    function increment(){
//         setCounter(counter+1);
//    }
    
//       return(
//         <div>
//           <h1> counter: {counter} </h1>
//           <button type='button' onClick={increment}>click</button>
//         </div>)
        
//       }

      // ReactDOM.render(<App/>, document.getElementById('root'))


// state example(class component):; counter app.......

// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//    counter: 0
//   };
// }

// increment = () =>{
//   this.setState({ counter: this.state.counter + 1});
// }

// lifecycle method......

// componentDidMount(){
//   this.setState({counter:10});
// }
// componentDidUpdate(){
//   alert("Numbers of counter:" + this.state.counter);
// }

//   render(){
//   return(
//     <div>
//       <h1> Count: {this.state.counter}</h1>
//        <button type="button" onClick={this.increment}>Change</button> 
//     </div>
//   )
// }
// }

// Props example ;; product lists........

// class Text extends React.Component {
//   render(){
//      return(
//       <div className='view'>
//       <h1> Product:{this.props.product}</h1> 
//       <h3> Price:{this.props.price}</h3>
//       </div>
//      )
// }
// }

// const App = () =>{
//   return(
//     <div>
// <Text product = 'Bread' price = '$2.00' />
// <Text product = 'Milk' price = '$3.00' />
// <Text product = 'Coffee powder' price= '$5.70' />
// <Text product = 'Fish' price= '$10' />
// <Text product = 'Meat' price= '$25' />
// </div>
//   )
// }

