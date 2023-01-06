import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import {Book} from "./components/Book/Book";
import {BookFilter} from "./components/BookFilter/BookFilter";


function App() {
    const[booksData, setBooksData] = useState([])

   useEffect(()=>{
       getData()
   }, [])

   async function getData(){
      await axios.get('./books.json')
          .then(response => {
              setBooksData(response.data)
          })
          .catch(err=>{
              console.log(err)
          })
   }

   const filterBooks = (value) => {
      let newBooksData = booksData.filter(b => b.category == value)
       setBooksData(newBooksData)
   }

    return (
    <div className="wrapper">
      <div className="app">
        <div className="app-body">
            <div>
                <BookFilter filterBooks={filterBooks}/>
            </div>
            {booksData.map( book => (
                    <Book key={book.id} book={book}/>
                ))
            }
        </div>
      </div>
    </div>
  );
}

export default App;
