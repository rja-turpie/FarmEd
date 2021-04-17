// const Search = () => {
//     return <div>Hello world!</div>
// }

// export default Search;



const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search Farms Near You</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search Farms Near You"
            name="s" 
        />
        <button type="submit">Search</button>
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