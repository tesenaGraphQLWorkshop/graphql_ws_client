import './App.css';
import { useQuery, gql } from '@apollo/client'; 

const get_books = gql`
query GetBooks
{
  books
  {
    title
    author {
            name
           }
  }
}
`;

const get_author = gql `
query GetAuthor {
  authors {
          name      
          book
          }
                }

`;

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
  return (
    <div className="App header">
      <h2>Simple React frontend app 🚀</h2>
      <br/>
      <button className='btn btn-info' onClick> Query GraphQL to get all books </button>
{/* {GetBooksAndAuthors} */}
      <br/>
      <button className='btn btn-info2' onClick> Get the author of the book </button>
{/* {GetAuthor} */}
      <br/>
      <button className='btn btn-info3' onClick={DisplayBooks}>Return books based on a binding / year </button>
      
      <DisplayBooks/>
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

  return ( data.book.title





/*     <select name='book_dropdown'>
    {data.books.map ((book) => (

      <option key={book.title} value={book.author.name}>

        {book.title}
        {book.author.name}

      </option>

    ))
    }

  </select> */

  );
    }


/* function GetAuthor(title) {
  const { loading, error, data } = useQuery(get_author, {variables: { data }})

  if (error) return <p> 'Error! ${error}' </p>;
  if (loading) return <p> loading..</p>;
  
  return <h1> hello {data.author} </h1>
}
 */



  function SearchBar({ filterText }) {
    return (
      <form>
        <input 
          type="text" 
          value={filterText} 
          placeholder="Search..."/>
      </form>
    );
  }


