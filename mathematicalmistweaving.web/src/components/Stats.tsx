import { ChangeEvent, useEffect, useRef, useState } from "react";
import { DEFAULTS as statDefault, makeRequestUrl, REQUEST_URLS } from "../common/constants";

const Stats = () => {
    const ref = useRef();
    const [stat, setStat] = useState({
        intellect: statDefault.Intellect.rating,
        crit: statDefault.CriticalStrike.rating,
        haste: statDefault.Haste.rating,
        mastery: statDefault.Mastery.rating,
        vers: statDefault.Versatility.rating,
        leech: statDefault.Leech.rating,
        stamina: statDefault.Stamina.rating,
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

    function StatPercent(value: any, name: any) 
    {
        const [stat, setStatPercent] = useState();
        const url = makeRequestUrl(REQUEST_URLS.StatPercent) + "?name=" + name + "&rating=" + value;
        useEffect(() => {
            fetch(url).then((response) => {
                if (!response.ok) {
                    throw response;
                }
                var data = response.json();
                console.log(data);
                return data;
            }).then(data => {
                setStatPercent(data);
            }).catch((error) => { console.log(error); })
        },);

        return (
            <small>
                ({stat}%)
            </small>
        );
    }

    const renderStatInputs = () => {
        return (
            <form onSubmit={handleSubmit} className="App">
                <div className="responsive-column-2">
                    <label>Intellect <input name="intellect" type="number" value={stat.intellect} onChange={handleStatChange} /></label>
                    <label>Crit <input name="crit" type="number" value={stat.crit} onChange={handleStatChange} />{StatPercent(stat.crit, statDefault.CriticalStrike.name)}</label>
                    <label>Haste <input name="haste" type="number" value={stat.haste} onChange={handleStatChange} />{StatPercent(stat.haste, statDefault.Haste.name)}</label>
                    <label>Mastery <input name="mastery" type="number" value={stat.mastery} onChange={handleStatChange} />{StatPercent(stat.mastery, statDefault.Mastery.name)}</label>
                    <label>Versatility <input name="vers" type="number" value={stat.vers} onChange={handleStatChange} />{StatPercent(stat.vers, statDefault.Versatility.name)}</label>
                    <label>Leech <input name="leech" type="number" value={stat.leech} onChange={handleStatChange} />{StatPercent(stat.leech, statDefault.Leech.name)}</label>
                    <label>Stamina <input name="stamina" type="number" value={stat.stamina} onChange={handleStatChange} /></label>
                </div>
            </form>
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