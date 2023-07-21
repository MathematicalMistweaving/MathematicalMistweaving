import { useRef } from "react";

const Stats = () => {
    const ref = useRef();
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        alert(ref);
    };
    return (
        <>
            <h3 className="App">Enter Your Stats:</h3>
            <form onSubmit={handleSubmit} className="App">
            <div>
                <label>Intellect: <input type="number" /></label>
                <label>Critical Strike: <input type="number" /></label>
                <label>Haste: <input type="number" /></label>
                <label>Mastery: <input type="number" /></label>
                <label>Versatility: <input type="number" /></label>
                <label>Leech: <input type="number" /></label>
                    <label>Stamina: <input type="number" /></label>
            </div>
            </form>
        </>
    );
}

export default Stats;