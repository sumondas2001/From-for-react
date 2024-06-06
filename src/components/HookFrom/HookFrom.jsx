import useInputState from "../../hooks/useInputState";

const HookFrom = () => {
     const [name, handleNameChange] = useInputState('sumon')
     const handleSubmit = e => {
          e.preventDefault();
          console.log('from data ', name)
     }
     return (
          <div>
               <form onSubmit={handleSubmit}>
                    <h1>1st From</h1>
                    <input value={name} onChange={handleNameChange}
                         type="text" name="text" placeholder="name" />
                    <br />
                    <input type="email" name="email" id="" placeholder="Email" />
                    <br />
                    <input type="password" name="password" id="" placeholder="password" />
                    <br /><br />
                    <input type="submit" value="Submit" />
                    <br /><br />
               </form>
          </div>
     );
};

export default HookFrom;