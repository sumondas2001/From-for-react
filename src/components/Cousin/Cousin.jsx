import { useContext } from "react";
import { AssetContext } from "../GrandPa/GrandPa";


const Cousin = ({ name }) => {
     const gift = useContext(AssetContext)
     return (
          <div>
               <h2>Cousin</h2>
               <p>{name}</p>
               <p>{gift}</p>
          </div>
     );
};

export default Cousin;