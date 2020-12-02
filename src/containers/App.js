import React, {PureComponent} from 'react';
// import logo from '../logo.svg';
import styles from './App.module.css';
// import Radium, {StyleRoot} from 'radium';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/withClass';
import AuthContext from './auth-context';

// import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

// export const AuthContext = React.createContext(false);
// export const AuthContext = React.createContext({
//     isAuth: false,
//     toggleAuth: () => {}
// });

class App extends PureComponent {
    // constructor(props){
    //     super(props);
    //
    // }
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     return nextState.persons !== this.state.persons ||
    //         nextState.showPersons !== this.state.showPersons
    // }

    state = {
        persons: [
            {id: "p1", name: "Jake", age: 28},
            {id: "p2", name: "Brody", age: 29},
            {id: "p3", name: "Emma", age: 26}
        ],
        showPersons: false,
        toggleClicked: 0,
        authenticated: false
    };

    // switchNameHandler = (newName) => {
    //     //  Do not do this: this.state.persons[0].name = "Emma"
    //     this.setState({
    //         persons: [
    //             {name: newName, age: 28},
    //             {name: "Ava", age: 29},
    //             {name: "Stephine", age: 26}
    //         ]
    //     })
    // };

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        // const person = Object.assign({}, this.state.persons[personIndex]);
        const person = {...this.state.persons[personIndex]};

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        // this.setState({
        //     persons: [
        //         {name: "James", age: 28},
        //         {name: event.target.value, age: 29}
        //     ]
        // });

        this.setState({
            persons: persons
        });
    };

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    };

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState((prevState, props) => {
            return {
                showPersons: !doesShow,
                toggleClicked: prevState.toggleClicked + 1
            }
        });
    };

    loginHandler = () => {
        const notAuthenticated = this.state.authenticated;
        this.setState({'authenticated': !notAuthenticated});
    };

    toggleAuth = () => {
        this.setState(prevState => {
            return {authenticated: !prevState.authenticated}
        })
    };

    render() {
        // const style = {
        //     backgroundColor: 'green',
        //     color: 'white',
        //     font: 'inherit',
        //     border: '1px solid blue',
        //     padding: '8px',
        //     cursor: 'pointer',
        //     ':hover': {
        //         backgroundColor: 'lightgreen',
        //         color: 'black'
        //     }
        // };
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <Persons persons={this.state.persons} clicked={this.deletePersonHandler}
                         changed={this.nameChangedHandler}
                    // isAuthenticated={this.state.authenticated}
                />
                // <div>
                //     {this.state.persons.map((person, index) => {
                //     return <Person name={person.name} age={person.age}
                //     key={person.id}
                //     click={() => this.deletePersonHandler(index)}
                //     changed={(event) => this.nameChangedHandler(event, person.id)}/>
                //     return <ErrorBoundary key={person.id}>
                //     <Person name={person.name} age={person.age}
                //     click={() => this.deletePersonHandler(index)}
                //     changed={(event) => this.nameChangedHandler(event, person.id)}/>
                //     </ErrorBoundary>
                //     })}
                //     <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                //     <Person name={this.state.persons[1].name} age={this.state.persons[1].age}
                //     click={this.switchNameHandler.bind(this, "James")}
                //     changed={this.nameChangedHandler}>Hobbies: Racing</Person>
                // </div>
            );
            // buttonClass = styles.Red;
            // style.backgroundColor = 'red';
            // style[':hover'] = {
            //     backgroundColor: 'salmon',
            //     color: 'black'
            // };
        }
        // const classes = [];
        // if (this.state.persons.length <= 2) {
        //     classes.push(styles.red);
        // }
        // if (this.state.persons.length <= 1) {
        //     classes.push(styles.bold);
        // }

        return (
            /*<StyleRoot>*/
            <>
                <header className={styles["App-header"]}>
                    <Cockpit showPersons={this.state.showPersons} persons={this.state.persons}
                             clicked={this.togglePersonHandler} appTitle={this.props.title}
                             // login={this.loginHandler}
                    />
                    <button className={"btn btn-primary"} onClick={() => {
                        this.setState({showPersons: true})
                    }}>Show Persons
                    </button>
                    {/*<AuthContext.Provider value={this.state.authenticated}>*/}
                    <AuthContext.Provider value={{isAuth:this.state.authenticated, toggleAuth: this.toggleAuth}}>
                        {persons}
                    </AuthContext.Provider>
                    {/*<button style={style} onClick={() => this.switchNameHandler("James")}>Switch Name</button>*/}
                    {/*<button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>*/}

                    {/*{*/}
                    {/*this.state.showPersons ?*/}
                    {/*<div>*/}
                    {/*<Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>*/}
                    {/*<Person name={this.state.persons[1].name} age={this.state.persons[1].age}*/}
                    {/*click={this.switchNameHandler.bind(this, "James")}*/}
                    {/*changed={this.nameChangedHandler}>Hobbies: Racing</Person>*/}
                    {/*</div> : null*/}
                    {/*}*/}
                </header>
            </>
            // </StyleRoot>
        );
    }
}

// export default Radium(App);
export default WithClass(App, styles.App);
