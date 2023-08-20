type ItemProps = {
  children: JSX.Element | string;
  className?: string;
};

function Item({ children, className }: ItemProps) {
  return (
    <li
      className={`navbar-item block text-white cursor-pointer ${
        className != undefined ? className : ""
      }`}
    >
      {children}
    </li>
  );
}

export default Item;
