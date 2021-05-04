import './App.css';
import React from 'react';
import contacts from "./contacts.json"
import SingleContact from './components/SingleContact';

class App extends React.Component {

  state = {
    ironContacts: contacts.splice(1,5)
  }

  handleAdd =() =>{
    //setting a random contact
    let randomContact = Math.floor(Math.random()* contacts.length)
    let elem = contacts[randomContact]
    this.setState({
      //shallow cloning
      ironContacts: [elem, ...this.state.ironContacts]
    })
  }

  handleSortName = () => {

    const {ironContacts} = this.state
    let clonedContacts = JSON.parse(JSON.stringify(ironContacts))
    

    clonedContacts.sort((a,b)=>{
      if (a.name > b.name){
        return 1
      } else if (a.name < b.name){
        return -1

      } else {
        return 0

      }
    })

    //to update the data 
    this.setState({
      ironContacts: clonedContacts
    })

  }

  handleSortPopularity = () => {

    const {ironContacts} = this.state
    let clonedContacts = JSON.parse(JSON.stringify(ironContacts))

    clonedContacts.sort((a,b)=>{
      if (a.popularity > b.popularity){
        return -1
      } else if (a.popularity < b.popularity){
        return 1

      } else {
        return 0

      }
    })

    this.setState({
      ironContacts: clonedContacts
    })
  }

  handleDelete = (someId) => {
    const {ironContacts} = this.state
    let filteredStudents = ironContacts.filter((singleContact)=>{
      return singleContact.id !== someId
  })

  this.setState({
    ironContacts: filteredStudents
  })

  }


  render (){
    const {ironContacts} = this.state



    return (
      <div>
        <button onClick={this.handleAdd} >Add Random Contacts</button>
        <button onClick={this.handleSortName}  >Sort by name</button>
        <button onClick={this.handleSortPopularity}  >Sort by popularity </button>
        {
          ironContacts.map((singleContact, index)=>{
            

              return <SingleContact contact={singleContact} key={index} oneDelete={this.handleDelete} />

              
          })
        }
      </div>
    )
  }
}

export default App;
