import { useEffect, useState } from "react";

function Laptop() {
  const [data, setData] = useState([]);

  console.log(data);
  const getData = () => {
    return fetch(`https://atmazon.onrender.com/laptop`).then((res) =>
      res.json()
    );
  };

  useEffect(() => {
    getData().then((res) => setData(res));
  }, []);

  return ( 
    <div> 
      <div className="sort_btns">
        <button>Sort by Low To High</button>
        <button>Sort by Low To High</button>
      </div>
   <div className="app_product">
    {data && data.map((e)=>{
      return(
        <div key={e._id}>
        <img src={e.imglink} alt={e.name} />
        <h4>{e.name}</h4>
        <h4>{e.brand}</h4>
        <h4>{`₹${e.MRP}`}</h4>
        <button className="buy">Buy Now</button>
         </div>
      )
    })}
  </div>;
  </div>
  )
}
export default Laptop;