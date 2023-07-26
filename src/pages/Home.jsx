import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function Home(props) {

    let navigate = useNavigate();
    const [gardens, setGardens] = useState([]);

    const handleAdd = () => {
        let path = `/map`;
        navigate(path);
    }

    const handleRemove = (index) => {
        const updatedGardens = [...gardens];
        updatedGardens.splice(index, 1);
        setGardens(updatedGardens);
        props.setGardens(updatedGardens);
    }

    const handleToDisplay = () => {
        let path = '/display';
        navigate(path);
    }

    useEffect(() => {
        setGardens(props.gardens);
    }, [])

    return (
        <div>
            <h1 className="text-left font-bold text-xl w-full mb-2">Home</h1>
            <p className="text-m mb-4">
                ชื่อไร่: ไร่ในฝัน
            </p>
            <p className="mb-2">
                <button onClick={handleAdd}>
                    <img className="inline mr-1" src="src/assets/Add_round_fill.png" />
                </button>
                เพิ่มสวน
            </p>
            <div className="mb-4">
                {gardens.map((garden, index) => (
                    <div className="ml-10 mb-2 text-sm h-16" key={index} >
                        <span onClick={handleToDisplay}>
                            สวน {garden.name}
                            <img className="inline h-full ml-5" src="src/assets/big_heat_map.jpg" />
                        </span>
                        <button onClick={() => handleRemove(index)}>
                            <img className="inline h-1/6 ml-5" src="src/assets/Close_round_light.svg" />
                        </button>
                    </div>
                ))}
            </div>
            <div>
                <h2 className="font-bold">ข้อมูลหุ่นยนต์</h2>
                <p className="w-full text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    )
}