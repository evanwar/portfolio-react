import React from 'react'
import { randomNumber, suffle } from '../../helpers/shuffle';
import CardImage from './CardImage';

export const Board = () => {

    const renderArray = [1, 2, 3, 4];

    const arrayImages = suffle();

    let indice = 0;

    const ignore = randomNumber();



    return (

        <>
            {
                renderArray.map(row => <div key={row + 'r'} className="row">
                    {
                        renderArray.map(column => (

                            <div key={indice++ + 'c'} className="col-3">
                                {indice === ignore ? < ></> : <CardImage image={arrayImages[indice]} />}

                            </div>)

                        )
                    }
                </div>)
            }
        </>


    )
}
