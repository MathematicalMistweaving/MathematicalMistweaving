import React from "react";
import { FilledInput, Input, InputLabel, OutlinedInput } from "@mui/material";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Defaults as statDefault, makeRequestUrl, REQUEST_URLS } from "../common/constants";

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
            [e.target?.name]: (e.target?.value.length > statDefault.StatMaxLength)
                ? Number(e.target?.value.substring(0, statDefault.StatMaxLength))
                : e.target?.value
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
            const getStat = async() => fetch(url).then((response) => {
                if (!response.ok) {
                    throw response;
                }
                var data = response.json();
                console.log(data);
                return data;
            }).then(data => {
                setStatPercent(data);
            }).catch((error) => { console.log(error); })

            const timerId = setTimeout(() => {
                getStat();
            }, 750);
            return () => {
                clearTimeout(timerId);
            }
        }, [url]);

        return (
            <small>
                ({stat}%)
            </small>
        );
    }

    const renderStatInputs = () => {
        return (
            <form onSubmit={handleSubmit}>
                <div className="responsive-column-3">
                    <InputLabel>Intellect <Input name="intellect" type="number" value={stat.intellect} onChange={handleStatChange} /></InputLabel>
                    <InputLabel>Critical Strike <Input  name="crit" type="number" value={stat.crit} onChange={handleStatChange} />{StatPercent(stat.crit, statDefault.CriticalStrike.name)}</InputLabel>
                    <InputLabel>Haste <Input name="haste" type="number" value={stat.haste} onChange={handleStatChange} />{StatPercent(stat.haste, statDefault.Haste.name)}</InputLabel>
                    <InputLabel>Mastery <Input name="mastery" type="number" value={stat.mastery} onChange={handleStatChange} />{StatPercent(stat.mastery, statDefault.Mastery.name)}</InputLabel>
                    <InputLabel>Versatility <Input name="vers" type="number" value={stat.vers} onChange={handleStatChange} />{StatPercent(stat.vers, statDefault.Versatility.name)}</InputLabel>
                    <InputLabel>Leech <Input name="leech" type="number" value={stat.leech} onChange={handleStatChange} />{StatPercent(stat.leech, statDefault.Leech.name)}</InputLabel>
                    <InputLabel>Stamina <Input name="stamina" type="number" value={stat.stamina} onChange={handleStatChange} /></InputLabel>
                </div>
            </form>
        );
    }

    return (
        <React.Fragment>
            <div className="App Left header">Stats:</div>
            {renderStatInputs()}
            
        </React.Fragment>
    );
}

export default Stats;