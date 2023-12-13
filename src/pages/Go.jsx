import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export default function Go(props) {

    const [inputValue, setInputValue] = useState('Thai Jasmine Rice');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    useEffect(() => {
        props.setCrop(inputValue);
    }, [inputValue])

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="text-center mb-8">
                <Link
                    to="/prototype"
                    className="bg-blue-500 hover:bg-blue-700 text-white text-4xl font-bold py-2 px-4 rounded-full"
                >
                    Click me!
                </Link>
            </div>

            <div className="mb-4">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter a value"
                    className="border border-gray-400 rounded px-3 py-2 text-center"
                />
            </div>

        </div>

    )
}
