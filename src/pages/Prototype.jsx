import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function Prototype(props) {

    let navigate = useNavigate();
    const [data, setData] = useState({});

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        try {
            const response = await fetch('http://localhost:3080/data');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);

            const p_data = JSON.parse(data.message)
            setData(p_data);

        } catch (error) {
            console.error('Error fetching data:', error);
            throw error; // Re-throw the error for the caller to handle
        }

        // setData({message: '\n\n{\n  "crop": "Thai Jasmine Rice",\n  "recommended_op": "rotation to prevent nutrient depletion."\n\n}'});

        //   return true; 
    }

    return (
        <div className="relative">
            <button className="absolute top-0 right-0 m-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                onClick={() => {
                    navigate('/');
                }}>
                X
            </button>
            {
                Object.keys(data).length === 0 ? (
                    <div>
                        <p>Loading...</p>
                    </div>
                ) :
                    (
                        <div className="container mx-auto p-4">
                            <h1 className="text-4xl font-semibold mb-4">Recommendations for {data.crop}</h1>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold">Recommended Nutrient Ratios:</h2>
                                <ul className="list-disc pl-6">
                                    <li>Nitrogen (N): {data.recommended_ratios.N}</li>
                                    <li>Phosphorus (P): {data.recommended_ratios.P}</li>
                                    <li>Potassium (K): {data.recommended_ratios.K}</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold">Recommended Nutrient Weights (mg/kg):</h2>
                                <ul className="list-disc pl-6">
                                    <li>Nitrogen (N): {data.recommended_weights.N}</li>
                                    <li>Phosphorus (P): {data.recommended_weights.P}</li>
                                    <li>Potassium (K): {data.recommended_weights.K}</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold">Recommended Watering:</h2>
                                <p>{data.recommended_water} mm</p>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold">Nutrient Improvement Recommendations:</h2>
                                <ul className="list-disc pl-6">
                                    <li>Nitrogen (N): {data.nutrient_improvement_recommendations.N}</li>
                                    <li>Phosphorus (P): {data.nutrient_improvement_recommendations.P}</li>
                                    <li>Potassium (K): {data.nutrient_improvement_recommendations.K}</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold">Other Recommendations:</h2>
                                <ul className="list-disc pl-6">
                                    {data.other_recommendations.map((recommendation, index) => (
                                        <li key={index}>{recommendation}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )
            }
        </div >
    )
}