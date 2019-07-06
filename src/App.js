import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
     <p>Contact Me</p>
        <div>
            <form action="http://localhost:3000/savecontact">
                <label>Name</label>
                <input type="text" id="fname" name="fistname" placeholder="Your Name.."/>

                <label>Email</label>
                <input type="email" id="email" name="email" placeholder="Your Email.."/>

                <label>Comment</label>
                <input type="comment" id="comment" name="comment" placeholder="Your Comment.."/>

                <input type="submit" value="Submit"/>
            </form>
        </div>
    </div>
        );
}

export default App;
