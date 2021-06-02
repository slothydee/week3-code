import React, {useState, useEffect} from 'react';

function CountdownWithHooks({ countFrom = 10 }) {
    const [count, setCount] = useState(countFrom);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [count]);

    return <div>{count}</div>;
}

CountdownWithHooks.propTypes = {
    countFrom: PropTypes.number
};

export default CountdownWithHooks;