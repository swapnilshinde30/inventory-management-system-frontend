const App = () => {
    const books = [
      {id: 1, name: "In Search of Lost Time ",author: { name: "Marcel Proust", id: 1 }},
      { id: 2, name: "Ulysses", author: { name: "James Joyce", id: 2 } },
      {id: 3, name: "Don Quixote",author: { name: "Miguel de Cervantes", id: 3 }},
      { id: 4, name: "Hamlet", author: { name: "William Shakespeare", id: 4 } },
      {id: 5, name: "Romeo and Juliet",author: { name: "William Shakespeare", id: 4 }},
      { id: 6, name: "Dubliners", author: { name: "James Joyce", id: 2 } }
    ];
    const [selectedAuthorId, setSelectedAuthorId] = useState(null);
  
    const authorOptions = new Map([
      ...books.map(book => [book.author.id, book.author.name])
    ]);
  
    const filteredBooks = () => {
      if (!selectedAuthorId) {
        return books;
      }
      return books.filter(book => String(book.author.id) === selectedAuthorId);
    };
  
    return (
      <div className="books">
        <select
          className="books__select"
          onChange={({ target }) => setSelectedAuthorId(target.value)}
        >
           <option value=''>--Select author--</option>
          {[...authorOptions].map(([id, name]) => (
            <option value={id}>{name}</option>
          ))}
        </select>
        <ul className="books__list">
          {filteredBooks().map(book => (
            <li className="books__item">
              {book.name} by {book.author.name}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  