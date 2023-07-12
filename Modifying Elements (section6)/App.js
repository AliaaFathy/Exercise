import React from 'react';
// Udemy's code editor is a little weird... 
// We do *not* need an 'import {useState}' line

function EditForm({ onSubmit, books }) {
  const first = books[0]
  const [n, setN] = React.useState(first ? first.id : '');
  const [text, setText] = React.useState(first ? first.title : '');
  
  const handleChange = (e) =&gt; {
    const id = parseInt(e.target.value);
    setN(id);
    const book = books.find(c =&gt; c.id === id);
    if (book) {
        setText(book.title);  
    }
  };
  
  const handleSubmit = (event) =&gt; {
    event.preventDefault();
    onSubmit(n, text);
  };
  
  return 
    <div>
        Id of book to Change
        
         {books.map(c =&gt; {c.id})}
        
    </div>
    <div>
        New Text
         setText(e.target.value)} /&gt;
    </div>
    Change
  
}

export { EditForm };
