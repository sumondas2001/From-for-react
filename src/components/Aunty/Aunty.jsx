import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../GrandPa/GrandPa";


const Aunty = () => {
     const [money, setMoney] = useContext(MoneyContext)


     return (
          <div>
               <h2>Aunty</h2>
               <section className="flex">
                    <Cousin name={'Mamshad'}></Cousin>
                    <Cousin name={'Rubaiya'}></Cousin>
               </section>
               <p>Grand Pa Money: {money}</p>
               <button onClick={() => setMoney(money + 1000)}>tk 1000</button>
          </div>
     );
};

export default Aunty;