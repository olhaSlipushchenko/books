import React from 'react';
import ReactDOM from 'react-dom/client';

import  './index.css';
import { books } from './books'; 
import Book from './Book';
import HeadLine from './HeadLine';

const BookList = () => {
  return (
    <>
      <HeadLine />
      <section className="booklist">
        <EventExamples />
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />;
        })}
      </section>
      <p className="link">
        <a href="https://github.com/olhaSlipushchenko/books.git">
          open-sourse code at GitHub
        </a>
      </p>
    </>
  );
};
const EventExamples = () => {
  return <section> 
    <form>
      <h2> typical form</h2>
      <input 
       type="text"
       name='example'
       onChange={(e) => console.log(e.target.value)}
       style= {{margin: '1rem 0'}} />
       <button type='submit'> submit form</button>
      </form>
      <button onClick= {() => console.log('click me')} >click me</button>
  </section>
};




const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)