import Brother from "../Brother/Brother";
import Me from "../Me/Me";
import Sister from "../Sister/Sister";


const Father = ({ asset }) => {
     return (
          <div>
               <h2>Father</h2>
               <section className="flex">
                    <Me asset={asset}></Me>
                    <Sister></Sister>
                    <Brother></Brother>
               </section>
          </div>
     );
};

export default Father;