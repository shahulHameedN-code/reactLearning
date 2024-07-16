import React from "react";

const Footer = ({toDoLength}) => {
  const year = new Date();
  return (
    <footer>
      <p>{toDoLength} List of items</p>
      <p>Copyright &copy; {year.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
