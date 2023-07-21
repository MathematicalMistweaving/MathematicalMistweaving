import React, { useEffect, useState } from 'react';
import { makeRequestUrl, REQUEST_URLS } from '../common/constants';
import '../index.css';

const HealingSpells = () => {
    const [data, setData] = useState<any>([]);
    const requestURL = makeRequestUrl(REQUEST_URLS.HealingSpells);
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
        <div>
            <h3 className="App">Healing Spells</h3>
            {
                data.map((property: { [x: string]: any; }) => {
                    return (
                        property['coefficient'] ?
                            <div className="responsive-column">
                                <span><b>{property['name']}</b></span>
                                <span>Sp: <b>{property['coefficient']}%</b>
                                {
                                    property['hotInfo'] ?
                                        <span>,  Duration: <b>{property['hotInfo']['duration']}s</b></span>
                                        : 
                                        <></>
                                }</span>
                                <span>Mana: <b>{Number(property['manaCost'] * 100).toPrecision(2)}%</b></span>
                                
                            </div>
                            :
                            <></>
                    )
                }
            )
        }
        </div>
    );
}

export default HealingSpells;