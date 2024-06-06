import { useContext } from "react";
import { MoneyContext } from "../GrandPa/GrandPa";


const Sister = () => {
     const grandPaMoney = useContext(MoneyContext)
     return (
          <div>
               <h2>Sister</h2>
               <p>Grand pa money : {grandPaMoney}</p>
          </div>
     );
};

export default Sister; <h2>Sister</h2>