import { ChangeEvent, useRef, useState } from "react";
import { DEFAULTS as statDefault } from "../common/constants";

const Stats = () => {
    const ref = useRef();
    const [stat, setStat] = useState({
        intellect: statDefault.Intellect,
        crit: statDefault.CriticalStrike,
        haste: statDefault.Haste,
        mastery: statDefault.Mastery,
        vers: statDefault.Versatility,
        leech: statDefault.Leech,
        stamina: statDefault.Stamina,
    });

    const handleStatChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStat({
            ...stat,
            [e.target?.name]: e.target?.value
        });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        alert(ref);
    };

    function critPercent() 
    {
        return ((stat.crit / 180+5)).toPrecision(4);
    }

    const renderStatInputs = () => {
        return (
            <form onSubmit={handleSubmit} className="App">
                <div className="responsive-column-2">
                    <label>Intellect <input name="intellect" type="number" value={stat.intellect} onChange={handleStatChange} /></label>
                    <label>Crit <input name="crit" type="number" value={stat.crit} onChange={handleStatChange} />{renderMultis()}</label>
                    <label>Haste <input name="haste" type="number" value={stat.haste} onChange={handleStatChange} /></label>
                    <label>Mastery <input name="mastery" type="number" value={stat.mastery} onChange={handleStatChange} /></label>
                    <label>Versatility <input name="vers" type="number" value={stat.vers} onChange={handleStatChange} /></label>
                    <label>Leech <input name="leech" type="number" value={stat.leech} onChange={handleStatChange} /></label>
                    <label>Stamina <input name="stamina" type="number" value={stat.stamina} onChange={handleStatChange} /></label>
                </div>
            </form>
        );
    }

    const renderMultis = () => {
        return (
            <small>
                ({critPercent()}%)
            </small>
        );
    }


    return (
        <>
            <h3 className="App">Enter Your Stats:</h3>
            {renderStatInputs()}
            
        </>
    );
}

export default Stats;