import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementByAmount } from './features/counter/counterSlice';

export default function IncrementByAmount() {
    const [increment, setIncrement] = useState('');
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);

    const handleIncrement = () => {
        dispatch(incrementByAmount(parseInt(increment)));
    };
    const handleChange = (e) => {
        const input = e.target.value;
        if (/^-?\d*$/.test(input) || input === '') {
            setIncrement(input);
        }
    };

    return (
        <div>
            <div>
                <h2>Current Value: {count}</h2>
                <input type="text" value={increment} onChange={handleChange} pattern="-?\d*"
                />
                <button 
                onClick={handleIncrement}>
                    Increment by Amount
                </button>
            </div>
        </div>
    );
}
