const ItemList = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <>
      {arr.map((val) => {
        return <h1 key={val} > Item list</h1>;
      })}
    </>
  );
};
export default ItemList;
