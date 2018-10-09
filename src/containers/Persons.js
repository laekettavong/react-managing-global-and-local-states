import React, { Component } from 'react';
import { connect } from 'react-redux'
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as Actions from '../components/store/actions'

class Persons extends Component {
    render() {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddPerson} />
                {this.props.persons.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.onDeletePerson(person.id)} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    //return global state managed by Redux
    return {
        persons: state.persons
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddPerson: (name, age) => {
            dispatch({ type: Actions.ADD, person: { name, age } })
        },
        onDeletePerson: (id) => dispatch({ type: Actions.DELETE, person: { id } }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);