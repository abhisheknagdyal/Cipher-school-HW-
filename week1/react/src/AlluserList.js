import React from "react";

const AlluserList = () => {
    let allusers = [{
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
return (
    <div>
        <Userdetails user={allusers[0]}/>
        <Userdetails user={allusers[1]}/>
        <Userdetails user={allusers[2]}/>
        <Userdetails />
    </div>
)
};

export default AlluserList;