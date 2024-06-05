

const SimpleFrom = () => {

     const handleSubmit1 = e => {
          e.preventDefault();
          console.log(e.target.text.value)
          console.log(e.target.email.value)
          console.log(e.target.password.value)
     }
     const handelSubmit2 = e => {
          e.preventDefault()
          console.log(e.target.name.value)
          console.log(e.target.email.value)
          console.log(e.target.date.value)
          console.log(e.target.password.value)
     }
     return (
          <div>
               <form onSubmit={handleSubmit1}>
                    <h1>1st From</h1>
                    <input type="text" name="text" placeholder="name" />
                    <br />
                    <input type="email" name="email" id="" placeholder="Email" />
                    <br />
                    <input type="password" name="password" id="" placeholder="password" />
                    <br /><br />
                    <input type="submit" value="Submit" />
                    <br /><br />
               </form>
               <form onSubmit={handelSubmit2}>
                    <input type="text" name="name" placeholder="Name" /><br />
                    <input type="email" name="email" id="" placeholder="Email" /><br />
                    <input type="date" name="date" id="" placeholder="Date" /><br />
                    <input type="password" name="password" id="" placeholder="Password" /><br />
                    <button>Submit</button>

               </form>

          </div>
     );
};

export default SimpleFrom;