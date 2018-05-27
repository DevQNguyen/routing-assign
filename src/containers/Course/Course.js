import React, { Component } from 'react';

/* const course = (props) => (
    <article className="Course">
        <h1>{props.title}</h1>
        <p>You selected the Course with ID: {props.id}</p>
    </article>
); */

class Course extends Component {
    state = {
        courseTitle: ''
    }

    componentDidMount() {
        this.parseQueryParams();
        console.log('In componentDidMount');
    }

    componentDidUpdate() {
        this.parseQueryParams();
        console.log('In componentDidUpdate');
    }

    parseQueryParams() {
        console.log(this.props);
        const query = new URLSearchParams(this.props.location.search);
        for (let param of query.entries()) {
            console.log('Returned Param: ' + param);
            if (this.state.courseTitle !== param[1]) {
                this.setState({ courseTitle: param[1] });
            }
        }
    }

    render() {
        return (
            <div className="Course">
                <h2>{this.state.courseTitle}</h2>
                <p>You selected the Course with ID: {this.props.match.params.courseId}</p>
            </div>
        );
    }
}


export default Course;