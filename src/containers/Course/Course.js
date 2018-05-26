import React, { Component } from 'react';

/* const course = (props) => (
    <article className="Course">
        <h1>{props.title}</h1>
        <p>You selected the Course with ID: {props.id}</p>
    </article>
); */

class Course extends Component {
    render() {
        return (
            <div className="Course">
                <h1>_COURSE_TITLE_</h1>
                <p>You selected the Course with ID: _ID_</p>
            </div>
        );
    }
}


export default Course;