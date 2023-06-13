const ListGroup = (props) => {
  const { items, onSelectItem, selectedItem } = props;

  return (
    <ul className="list-group ml-10 mt-2 mr-4">
      {items.map((item) => (
        <li
          className="rounded-lg  text-left py-2 text-neutral-500 transition duration-500 hover:bg-teal-100 hover:text-neutral-700 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200"
          key={item._id}
          style={{ cursor: "pointer" }}
          onClick={() => onSelectItem(item._id)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
