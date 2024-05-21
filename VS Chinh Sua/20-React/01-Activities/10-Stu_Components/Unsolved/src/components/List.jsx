function List(props) {
  const {groceries} = props;
  return (
    <ul className="list-group">
      {/* TODO: Use the `map` method to iterate over each grocery and return a `li` element that contains the item's name and has a unique key attribute */}
      {groceries.map((item,index) => {
        return (
          // TODO: Your code here
          <li  className="list-group-item" key={item.id}>
            {index} {item.name}
          </li>
        );
      })}
    </ul>
  );
}

export default List;
