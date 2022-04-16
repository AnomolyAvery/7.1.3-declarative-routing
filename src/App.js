import React, { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    const updateCount = () => {
        setCount(count + 1);
    };

    window.updateCount = updateCount;

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount((p) => p + 1)}>Click me</button>
        </div>
    );
}

export default App;
