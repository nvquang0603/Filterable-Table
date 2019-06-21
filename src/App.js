import React, {Component } from 'react';
import Banner from './Banner';
import Search from './Search/Search.js';
import Table from './Table/Table.js';

const DEFAULT_ITEM = [{
  id: 1,
  name: 'Sinh An',
  age: 14,
  gender: 2
},
{
  id: 2,
  name: 'Bình',
  age: 32,
  gender: 1
},
{
  id: 3,
  name: 'Cường',
  age: 41,
  gender: 0
},
{
  id: 4,
  name: 'Dương',
  age: 42,
  gender: 1
},
{
  id: 5,
  name: 'Đạt',
  age: 25,
  gender: 0
},
{
  id: 6,
  name: 'Én',
  age: 21,
  gender: 1
},
{
  id: 7,
  name: 'Ếch',
  age: 37,
  gender: 0
},
{
  id: 8,
  name: 'Giang',
  age: 56,
  gender: 1
},
{
  id: 9,
  name: 'Hồng',
  age: 13,
  gender: 0
},
{
  id: 10,
  name: 'Ích',
  age: 36,
  gender: 1
},
{
  id: 11,
  name: 'Kiên',
  age: 47,
  gender: 0
},
{
  id: 12,
  name: 'Long',
  age: 38,
  gender: 1
},
{
  id: 13,
  name: 'Mạnh',
  age: 53,
  gender: 0
},
{
  id: 14,
  name: 'Ninh',
  age: 21,
  gender: 1
},
{
  id: 15,
  name: 'Oanh',
  age: 15,
  gender: 0
},
{
  id: 16,
  name: 'Ông',
  age: 17,
  gender: 0
},
{
  id: 17,
  name: 'An',
  age: 17,
  gender: 1
},
{
  id: 18,
  name: 'An',
  age: 16,
  gender: 0
},
{
  id: 19,
  name: 'An',
  age: 32,
  gender: 0
},
{
  id: 20,
  name: 'An',
  age: 25,
  gender: 1
},
{
  id: 21,
  name: 'An',
  age: 35,
  gender: 0
},
{
  id: 22,
  name: 'An',
  age: 46,
  gender: 0
},
{
  id: 23,
  name: 'An',
  age: 51,
  gender: 1
},
{
  id: 24,
  name: 'An',
  age: 52,
  gender: 0
},
{
  id: 25,
  name: 'An',
  age: 51,
  gender: 0
},
{
  id: 26,
  name: 'An',
  age: 37,
  gender: 1
},
{
  id: 27,
  name: 'An',
  age: 46,
  gender: 0
},
{
  id: 28,
  name: 'An',
  age: 38,
  gender: 1
},
{
  id: 29,
  name: 'An',
  age: 55,
  gender: 0
},
{
  id: 30,
  name: 'An',
  age: 44,
  gender: 1
}];

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      originItems: [...DEFAULT_ITEM],
      items: []
    }
    this.filterUser = this.filterUser.bind(this)
    this.resetTable = this.resetTable.bind(this)
  }
  componentWillMount() {
    this.setState({
      items: [...this.state.originItems]
    })
  }

  filterUser = (user) => {
      let updatingList = this.state.originItems;
      let updatedList
      if(user.userAge === '') {
        updatedList = updatingList.filter((item)=>{
          return item.name.toLowerCase().search(
            user.userName.toLowerCase()) !== -1 && item.gender === parseInt(user.userGender)
      });
      } else 
      {
        updatedList = updatingList.filter((item)=>{
          return item.name.toLowerCase().search(
            user.userName.toLowerCase()) !== -1 && item.age === parseInt(user.userAge, 10) && item.gender === parseInt(user.userGender)
        });
      }
      this.setState({items: updatedList});
  }
  resetTable() {
    console.log(this.state.originItems)
    this.setState({
      items: [...this.state.originItems]
    })
  }
  render() {
    return (
      <div>
          <Banner />
          <Search filterUser={this.filterUser} resetTable={this.resetTable}/>
          <Table hooman={this.state.items}/>
      </div>
    );
  }
}


export default App;
