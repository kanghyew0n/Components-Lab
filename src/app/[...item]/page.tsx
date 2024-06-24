const ItemPage = ({ params: { item } }: { params: { item: string[] } }) => {
  const path = ["", ...item].join("/");
  console.log(path);
  return <div>item page {path}</div>;
};

export default ItemPage;
