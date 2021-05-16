import React, {useState} from 'react'; 
import './App.css';
import Contacts from './chat pages/contacts';
import DMs from './chat pages/DMs';
import GroupChats from './chat pages/groupchats';
import Pinnedchats from './chat pages/pinnedchats';
import Nav from './chat pages/Nav';
import Chat from './chat pages/chat';
import { BrowserRouter, Switch,Route} from 'react-router-dom';
import data from './data';

const allCategories= [...new Set(data.map((datatype) => datatype.category))];
console.log(allCategories);
function App() {
  const [chatTypes, setChatTypes]= useState(data);
  const [chatCategory, setChatCategory]= useState(allCategories);
  const filterItems= (category) => {
    if(category === 'Contacts'){
      setChatTypes(data);
      return;
    }
    const newItems= data.filter((type)=> type.category === category)
    setChatTypes(newItems);
    console.log(filterItems);
  }
    
  return (
    <div className="main">
      <div className="App">
      <BrowserRouter>
      <Nav chatCategory={chatCategory} filterItems={filterItems}/>
      <Chat chatTypes= {chatTypes} />
      <Switch>
          <Route path= '/pinned' component= {Pinnedchats} />
          <Route path= '/group' component= {GroupChats} />
          <Route path= '/DMs' component= {DMs} />
          <Route path= '/Contacts' component= {Contacts} />
      </Switch>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
