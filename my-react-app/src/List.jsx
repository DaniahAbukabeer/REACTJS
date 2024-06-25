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

List.proptypes = {
    category: PropTypes.string,
    items: proptypes.arrayOf(PropTypes.shape({id: PropTypes.number, 
                                              name: PropTypes.string,
                                              calories: PropTypes.number,   
    })),
}

export default List