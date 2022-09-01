import {useState} from 'react';

const ProductTable = () => {
    const people = [
        {
            id:1,
            name: "Michael",
            age:21
        },
        {
            id:2,
            name: "Robert",
            age:46
        },
        {
            id:3,
            name: "Will",
            age:29
        },
        {
            id:4,
            name: "Lisa",
            age:8
        }
    ];

    const [name, setName] = useState('');

    // the search result
    const [foundPeople, setFoundPeople] = useState(people);
  
    const filter = (e) => {
      const keyword = e.target.value;
  
      if (keyword !== '') {
        const results = people.filter((person) => {
          return person.name.toLowerCase().startsWith(keyword.toLowerCase());
          // Use the toLowerCase() method to make it case-insensitive
        });
        setFoundPeople(results);
      } else {
        setFoundPeople(people);
        // If the text field is empty, show all users
      }
  
      setName(keyword);
    };
    return (
        <div className="Component">
          <input
            type="search"
            value={name}
            onChange={filter}
            className="input"
            placeholder="Filter by Name"
          />
    
          <div className="employee-list">
            {foundPeople && foundPeople.length > 0 ? (
              foundPeople.map((person) => (
                <li key={person.id} className="employee">
                  <span className="person-id">{person.id} - </span>
                  <span className="person-name">{person.name} - </span>
                  <span className="person-age">{person.age} year old</span>
                </li>
              ))
            ) : (
              <h1>No people found!</h1>
            )}
          </div>
        </div>
      );
    }
export default ProductTable;