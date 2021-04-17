// const Search = () => {
//     return <div>Hello world!</div>
// }

// export default Search;

import './search.css';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input'
// import { sizing } from '@material-ui/system';

const SearchBar = () => (
    <form action="/search" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search Farms Near You</span>
        </label>
        <Input
            type="text"
            id="header-search"
            placeholder="Search Farms Near You"
            name="term"
        />
        <Button href="/search" >Search </Button>
    </form>
);

export default SearchBar;

// import { SearchBar } from 'react-native-elements';

// export default class App extends React.Component {
//   state = {
//     search: '',
//   };

//   updateSearch = (search) => {
//     this.setState({ search });
//   };

//   render() {
//     const { search } = this.state;

//     return (
//       <SearchBar
//         placeholder="Type Here..."
//         onChangeText={this.updateSearch}
//         value={search}
//       />
//     );
//   }
// }

// // export default SearchBar