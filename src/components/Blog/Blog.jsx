import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <>
            <div>
                <h2 className='text-xl font-semibold my-3'>Q1: Props vs state</h2>
                <p className='text-justify'>Props are short for "properties," and they are used to pass data from a parent component to a child component. Props are read-only, meaning that a child component cannot modify the values of its props. Instead, the parent component must modify its own state and pass the new data down to the child component via props. Props are useful for creating reusable and modular components, as well as for passing data and behavior down the component tree.
                    <br />
                    <br />

                    State, on the other hand, is used to manage the internal state of a component. State is mutable, meaning that a component can modify its own state. When a component's state changes, React will re-render the component and update the UI to reflect the new state. State is useful for managing things like user input, form data, and other data that can change over time.
                </p>
            </div>
            <div>
                <h2 className='text-xl font-semibold my-3'>Q2: How does useState work?
                </h2>
                <p className='text-justify'>useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.

                </p>
            </div>
            <div>
                <h2 className='text-xl font-semibold my-3'>Q3: Purpose of useEffect other than fetching data.
                </h2>
                <p className='text-justify'>
                    The useEffect in react js allows you to perform side effects in your components. The react useEffect examples of side effects include retrieving data, direct DOM updates, and timers. The second argument is optional.
                </p>
            </div>
            <div>
                <h2 className='text-xl font-semibold my-3'>Q4: How Does React work?

                </h2>
                <p className='text-justify mb-3'>
                    ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.
                </p>
            </div>
        </>
    );
};

export default Blog;