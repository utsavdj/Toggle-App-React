import React, {Component} from 'react'
import styles from './Person.module.css';
// import Radium from 'radium';
// import WithClass from '../../../hoc/different-withclass/WithClass';
import WithClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
// import {AuthContext} from "../../../containers/App";
import AuthContext from '../../../containers/auth-context';

// const person = (props) => {
//     // return  <p>I'am a Person! and I'm {Math.floor(Math.random()*30)} years old!</p>
//     // const style = {
//     //     '@media (min-width: 500px)': {
//     //         width: '450px'
//     //     }
//     // };
//
//     // const random = Math.random();
//     // if(random > 0.7){
//     //     throw new Error("Something went wrong");
//     // }
//     return (
//         /*<div className={"person"} style={style}>*/
//         <div className={styles.person}>
//             <p onClick={props.click}>I'am {props.name}! and I'm {props.age} years old!</p>
//             <p>{props.children}</p>
//             <input type="text" onChange={props.changed} value={props.name}/>
//         </div>
//     )
// };

class Person extends Component {
    static contextType = AuthContext;
    constructor(props) {
        super(props);
        this.inputElement = React.createRef();
    }

    componentDidMount() {
        if (this.props.position === 0) {
            // this.inputElement.focus()
            this.inputElement.current.focus();
        }
    }

    focusInput() {
        this.inputElement.current.focus();
    }

    render() {
        return (
            <>
                {/*{auth => auth ? <p>I am authenticated!</p> : null}*/}
                {/*<AuthContext.Consumer>*/}
                    {/*{authContext=>{*/}
                        {/*return (*/}
                            {/*<button onClick={authContext.toggleAuth}>{authContext.isAuth?'Logout':'Login'}</button>*/}
                        {/*)*/}
                    {/*}}*/}
                {/*</AuthContext.Consumer>*/}
                <button onClick={this.context.toggleAuth}>{this.context.isAuth?'Logout':'Login'}</button>
                <p onClick={this.props.click}>I'am {this.props.name}! and I'm {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text"
                    // ref={(inp)=>{this.inputElement = inp}}
                       ref={this.inputElement}
                       onChange={this.props.changed}
                       value={this.props.name}/>
            </>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

// export default Radium(person);
// export default person;
export default WithClass(Person, styles.person);