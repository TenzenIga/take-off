import store from '../../store/store';

import './SearchBox.css';

function SearchBox() {
  const handleSearch = (value: string)=>{
    if(value){
        store.filterData(value);
    }else{
        store.getContacts();
    }
  }
  return (
      <div className="searchbox">
          <input type="text" onChange={e => handleSearch(e.target.value)} placeholder="Search"/>
      </div>
  )
}

export default SearchBox;