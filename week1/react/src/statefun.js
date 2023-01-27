import React,{useState} from "react";
import Userdetails from "./UserDetails";

class AlluserList extends React.Component {
    state = {
        name: "abhi",
    };

    allusers = [{
        name: "John",
        email: "johan@gmail.com",
        phoneNumber: "7051869354",
    },
    {
        name: "abhi",
        email: "sourav@gmail.com",
        phoneNumber: "7051869354",
    },
    {
        name: "sourav",
        email: "sourav@gmail.com",
        phoneNumber: "7051869354",
    },
];
render () {
    setTimeout(() => {
       this.setState({name: "Abhishek Choudhary"});
    }, 15000);

return (
     <div>
        <h1>The name is {this.state.name}</h1>
        {this.allusers.map ((user,index) => (
            <Userdetails key={index} user={user}/>
))}
           {/* <Userdetails user={allusers[0]}/>
           <Userdetails user={allusers[1]}/>
           <Userdetails user={allusers[2]}/>
           <Userdetails /> */}
     </div>
)
};
}
const AlluserList = () => {
    const [state, setState] = useState({name: "Abhi"});
    return <h1>The name is {state.name}</h1>
}
export default AlluserList;