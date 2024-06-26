import PropTypes from 'prop-types'
function List(props){

    const itemList = props.items;
    const category = props.category;
    //we can even sort them 
    //ALPHABETICAL
    //fruits.sort((a,b)=> a.name.localeCompare(b.name));
    //reverse alphabetical order
    //fruits.sort((a,b) => b.name.localeCompare(a.name)); 
    //sort by calories in a numericall way
    //fruits.sort((a,b) => a.calories - b.calories);
    //sort by calories in reverse nuericall way
    itemList.sort((a,b) => b.calories - a.calories);

    const lowcalFruits = itemList.filter(item => item.calories < 100 );
    const highCalFruits = itemList.filter(item => item.calories >= 100);

    const listItems = itemList.map(item => 
    <li key={item.id}>{item.name}: &nbsp;
                        <b>{item.calories}</b></li>);


    return(<>
    <h3 className="list-category">{category}</h3><ol className="list-items">{listItems}</ol>
    </>

);
}

List.defaultProps = {
    category: "Category",
    items: [],
}


// react-dom_client.js?v=7980a319:521 Warning: List: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.
//     at List (http://localhost:5173/src/List.jsx:19:26)
//     at div
//     at App


export default List