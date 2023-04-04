import "./Container.css";

const Container = ({ title, children }) => {
  console.log('childreは？', children);
  return (
    <div className="container">
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default Container;
