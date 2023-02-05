import React, {useEffect, useState } from "react";

const taskScreen = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Task screen mounted");
    }, []);

    useEffect(() => {
        console.log("Task screen updated");
        setCount(5);
    }, [])
    return taskScreen.map((task, index) => {
        <div key = {index} on onClick={(e) => setCount (count + 1)}>
            <h1>
                {task.taskNumber} {task.taskname}
            </h1>
            <p>{task.taskDescription}</p>
        </div>
    });
};
export default taskScreen;