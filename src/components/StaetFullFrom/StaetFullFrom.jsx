import { useState } from "react";


const StaetFullFrom = () => {
     const [name, setName] = useState(null)
     const [email, setEmail] = useState(null);
     const [password, setPassword] = useState(null);
     const [error, setError] = useState('')
     const handelSubmit = e => {
          e.preventDefault();
          if (password.length < 6) {
               setError('Password must be 6 character or longer')
          }
          else {
               setError('')
               console.log(name, email, password);
          }



     }
     const handelEmailChange = e => {
          setEmail(e.target.value);

     }
     const handleNameChange = e => {
          setName(e.target.value)
     }
     const handlePasswordChange = e => {
          setPassword(e.target.value)
     }
     return (
          <div>
               <form onSubmit={handelSubmit}>

                    <input
                         onChange={handleNameChange} required
                         type="text" name="text" placeholder="name" />
                    <br />
                    <input
                         onChange={handelEmailChange} required
                         type="email" name="email" id="" placeholder="Email" />
                    <br />
                    <input
                         onChange={handlePasswordChange} required
                         type="password" name="password" id="" placeholder="password" />
                    <br /><br />
                    <input type="submit" value="Submit" />
                    <br /><br />
                    {
                         error && <p>{error}</p>
                    }
               </form>
          </div>
     );
};

export default StaetFullFrom;