import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import './GrandPa.css'

export const AssetContext = createContext();
export const MoneyContext = createContext()

const GrandPa = () => {

     const asset = 'Diamond';
     const [money, setMoney] = useState(1000)
     return (
          <div className="GrandPa">
               <h2>Grand Pa</h2>
               <h2>Money : {money}</h2>

               <MoneyContext.Provider value={[money, setMoney]}>
                    <AssetContext.Provider value={'gold'}>
                         <section className="flex">
                              <Father asset={asset}></Father>
                              <Uncle></Uncle>
                              <Aunty></Aunty>
                         </section>
                    </AssetContext.Provider>
               </MoneyContext.Provider>
          </div>
     );
};

export default GrandPa;