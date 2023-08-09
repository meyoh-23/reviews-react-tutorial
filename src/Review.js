import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0) // because arrays are zero-index-based. by default, always showcase the first person on the array.
  const {name, job, image, text} = people[index];

  // to acertain that we are always looping within our array length
  const checkNumber = (number) => {
    // for the next functionality
    if ( number > people.length - 1) {
      return 0 // return the first item
    }
    // for the previous functionality
    if ( number < 0) {
      return people.length -1;
    }

    return number; // when none of the two expression is matched
  }

  // click handler on the button
  const nextPerson = () => {
    setIndex((index) => {
        let newIndex = index + 1;
        return checkNumber(newIndex)
    });
  };
  const prePerson = () => {
    setIndex((index) => {
        let newIndex = index - 1;
        return checkNumber(newIndex)
    });
  };


  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img'/>
        <span className='quote-icon'>
          <FaQuoteRight/>
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prePerson}>
          <FaChevronLeft/>
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight/>
        </button>
      </div>
      <button className='random-btn'>suprise me</button>
    </article>
  );
};

export default Review;
