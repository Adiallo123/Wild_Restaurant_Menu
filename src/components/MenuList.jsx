/* eslint-disable react/prop-types */
import MenuItem from "./MenuItem";

function MenuList({ foodItems }) {
  console.log(foodItems);
  return (
    <>
    <div>
      {foodItems.map((foodItem, index) => (
        <div key={index}>
          <MenuItem foodItem={foodItem}/>
        </div>
      ))}
    </div>
    
    {/*render a MenuItem component to each element of the props array*/}</>
  );
}

export default MenuList;
