const Helmet = (props) => {
  document.title = "Auto Dom - " + props.title;
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;
