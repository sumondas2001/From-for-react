import { useState } from "react";


const StaetFullFrom = () => {
     const [email, setEmail] = useState(null)
     const handelSubmit = e => {
          e.preventDefault()
          console.log(email)


     }
     const handelEmailChange = e => {
          setEmail(e.target.value)
     }
     return (
          <div>
               <form onSubmit={handelSubmit}>

                    <input type="text" name="text" placeholder="name" />
                    <br />
                    <input
                         onChange={handelEmailChange}
                         type="email" name="email" id="" placeholder="Email" />
                    <br />
                    <input type="password" name="password" id="" placeholder="password" />
                    <br /><br />
                    <input type="submit" value="Submit" />
                    <br /><br />
               </form>
          </div>
     );
};

export default StaetFullFrom;