import React, { useEffect, useState } from 'react';
import '../index.css';

const HealingSpells = () => {
    const [data, setData] = useState<any>([]);
    const requestURL = `https://localhost:7062/api/v1/SpellData/healing/`;
    useEffect(() => {
        fetch(requestURL)
            .then((response) => {
                if (!response.ok) {
                    throw response;
                }
                var data = response.json()
                console.log(data);
                return data;
            }).then(data => {
                setData(data);
            }).catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className="App App-header">
            {
                data.map((property: { [x: string]: any; }) => {
                    return (
                        <>
                            <span>Name: {property['name']} </span>
                            <span>Spellpower: {property['coefficient']}%</span><br/>
                        </>
                    )
                }
            )
        }
        </div>
    );
}

export default HealingSpells;