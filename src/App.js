//import { Component } from 'react';
import { useEffect, useState } from 'react';

import CardList from './components/card-list/card-list.component';
import './App.css';
import SearchBox from './components/search-box/search-box.component';


const App =()=>{
  console.log('Render');
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=> response.json())
    .then((users)=> setMonsters(users));
  },[]);

  useEffect(()=>{
    const searchMonsters = (monsterName, searchField)=>{ 
      return monsterName.name.toLowerCase().includes(searchField);
    };

    const filteredList = monsters.filter((searchMonster)=> searchMonsters(searchMonster,searchField ));

    setFilteredMonsters(filteredList);

  },[monsters, searchField]);

  const onSearchChange = (event)=>{
    const searchFieldString  = event.target.value.toLocaleLowerCase();

    setSearchField(searchFieldString);     
  };

  return(
    <div className="App">
      <h1 className='title'>Monsters Rolodex</h1>
      <SearchBox className='monsters-search-box' placeholder='Search Monsters' onChangeHandler={onSearchChange} />
      <CardList listToDisplay={filteredMonsters} />
    </div>
  )
}



/* class App extends Component {

  constructor(){
    super();

    this.state={monsters:[
      
    ],searchField:''};

    //this.state={origMonsterList:[]};

  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=> response.json())
    .then((users)=> this.setState(()=>{
      return {monsters : users, origMonsterList: users};      
    }
    ));
  }

  render(){
    const {monsters, searchField} = this.state;
    const {searchMonters} = this;

    const filteredList = monsters.filter(searchMonter=> searchMonters(searchMonter,searchField ));

    return (
      <div className="App">
      <h1 className='title'>Monsters Rolodex</h1>

      <SearchBox className='monsters-search-box' placeholder='Search Monsters' onChangeHandler={this.onSearchChange} />

      <CardList listToDisplay={filteredList} />
      </div>
    );
  }

  onSearchChange = (event)=>{
        this.setState(()=>{ return {searchField: event.target.value.toLowerCase()}});        
      };

  searchMonters(monsterName, searchField){
    return monsterName.name.toLowerCase().includes(searchField);
  }
  
}*/

export default App;

