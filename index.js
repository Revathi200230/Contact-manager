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
      
