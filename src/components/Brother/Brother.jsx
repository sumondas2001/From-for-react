import { useContext } from "react";
import { MoneyContext } from "../GrandPa/GrandPa";


const Brother = () => {
     const grandPaMoney = useContext(MoneyContext)
     return (
          <div>
               <h2>Brother</h2>
               <p>{grandPaMoney}</p>
          </div>
     );
};

export default Brother;