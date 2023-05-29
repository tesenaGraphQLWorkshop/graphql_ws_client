import { useState } from 'react';
import './App.css';
import { useQuery, gql } from '@apollo/client'; 

const get_books = gql`
query GetBooks
{
  allbooks
  {
    title
    author {
            name
           }
  }
}
`;

const get_author = gql `
query GetAuthorByBook {
  authors {
          name      
          book
          }
                }

`;

//const get_book_by_author = gql `
//query GetBookByAuthor   ($AuthorName: NAME!){
  //authors( inputName:$AuthorName {
   // name
   // books
   //       }
  
//}
//`;
//function nameFromUser({inputName}){
//const{loading, error, data} = useQuery(get_book_by_author,{variables:{AuthorName: inputName}})
//}

const get_all = gql `
query GetBooksAndAuthors {
  books {
    title
        }
  
  authors {
    name
          }
}
`;

export default function App() {
  const [activeComponent, setActiveComponent] = useState("allBooks");
  return (
    <div className="App header">
      <h2>Simple React frontend app 🚀</h2>
      <img src={require('./prague-library-book-tower-stuart-litoff.jpg')} alt="Prague library tower"></img>
      <br/>
      <br/>
      <button className='btn btn-info' onClick={() => {
        setActiveComponent("allBooks");
      }}> Query GraphQL to get all books </button>
{/* {GetBooksAndAuthors} */}
      <br/>
      <button className='btn btn-info2' onClick={() => {
        setActiveComponent("authorOfBook");
      }} > Get the author of the book </button>
{/* {GetAuthor} */}
      <br/>
      <button className='btn btn-info3' onClick={() => {
        setActiveComponent("binding");
      }} >Return books based on a binding / year </button>
      
      { activeComponent === "allBooks" && <DisplayBooks/> }      
    </div>
        )
}

/*
<ul class = "list-group">
<li class = "list-group-item"> Title of the book {book.title} </li>
<li class = "list-group-item"> Author of the book {book.author} </li>
</ul>
*/

/* 
function GetBooksAndAuthors()
{
  const { loading, error, data } = useQuery(get_all)

  if (loading) return <p> Loading... </p>;
  if (error) return <p> Error : ${error.message} </p>;

  return <h2> hello {data.author} </h2>
}
 */

function DisplayBooks() {
  const { loading, error, data } = useQuery(get_books);

  if (loading) return <p> Loading... </p>;
  if (error) return <p> Error : ${error.message} </p>;

  return (
    <div>
      {data.allbooks.map((book) => <div key={book.title}><span>{book.title}</span> - <span>{book.author.name}</span></div>)}
    </div>
  );
}


/* <select>
{data.books.map ((book) => (

      <option key={book.title} value={book.author.name}>

        {book.title}
        
      </option>

    ))
    } 

  </select> 
  
  

 function GetAuthor(title) {
  const { loading, error, data } = useQuery(get_author, {variables: { data }})

  if (error) return <p> 'Error! ${error}' </p>;
  if (loading) return <p> loading..</p>;
  
  return <h1> hello {data.author} </h1>

 */





function SearchBar({ filterText }) {
  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="Search..." />
    </form>
  );
}
