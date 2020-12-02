import React, {PureComponent} from 'react';
import Person from './Person/Person'

// const persons = (props) =>
//     props.persons.map((person, index) => {
//         return <Person name={person.name} age={person.age}
//                        click={() => props.clicked(index)}
//                        key={person.id}
//                        changed={(event) => props.changed(event, person.id)}/>
//     });

class Persons extends PureComponent {
    constructor(props){
        super(props);
        this.lastPersonRef = React.createRef();
    }
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     return nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked;
    // }
    componentDidMount() {
        this.lastPersonRef.current.focusInput();
    }

    render() {
        return this.props.persons.map((person, index) => {
            return <Person name={person.name} age={person.age}
                           click={() => this.props.clicked(index)}
                           position={index}
                           key={person.id}
                           ref={this.lastPersonRef}
                           // authenticated={this.props.isAuthenticated}
                           changed={(event) => this.props.changed(event, person.id)}/>
        });
    }
}

export default Persons;