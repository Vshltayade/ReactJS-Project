// product ratecount
const Rate = (props) => {
  // eslint-disable-next-line react/prop-types
  const arr = Array(props.rateCount).fill(0);
  const element = arr.map((e, i) => (
    <i className="fa-solid fa-star" key={i}></i>
  ));
  return <div>{element}</div>;
};

export default Rate;
