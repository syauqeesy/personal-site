type ItemProps = {
  className?: string;
  children: JSX.Element | string;
};

function Item({ className, children }: ItemProps) {
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
