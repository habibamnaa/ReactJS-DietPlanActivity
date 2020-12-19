import React from 'react';
import '../SignUp/Service/App.css';
import TodoList from '../SignUp/Service/TodoList';

const Hero = ({handleLogout}) => {
    return(
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
            <Service/>;
        </section>
    );
};

const Service = () => {
    return (
        <div className='todo-app'>
        <TodoList />
        </div>
    )
}


export default Hero;