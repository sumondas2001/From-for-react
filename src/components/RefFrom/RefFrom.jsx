import { useEffect, useRef } from "react";


const RefFrom = () => {
     const nameRaf = useRef(null);
     const emailRef = useRef(null);
     const passwordRef = useRef(null)
     useEffect(() => {
          nameRaf.current.focus()
     }, [])
     const handelSubmit = e => {
          e.preventDefault();
          console.log(nameRaf.current.value);
          console.log(emailRef.current.value)
          console.log(passwordRef.current.value)
     }
     return (
          <div>
               <form onSubmit={handelSubmit}>

                    <input
                         ref={nameRaf}
                         type="text" name="text" placeholder="name" />
                    <br />
                    <input
                         ref={emailRef}
                         type="email" name="email" id="" placeholder="Email" />
                    <br />
                    <input
                         ref={passwordRef}
                         type="password" name="password" id="" placeholder="password" />
                    <br /><br />
                    <input type="submit" value="Submit" />
                    <br /><br />

               </form>
          </div>
     );
};

export default RefFrom;