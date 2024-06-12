import React, {useContext} from "react";
import {Context} from "./../store/appContext"

const Card = () => {
    const {store, actions} = useContext(Context)
    return(
        <h1>Card Component</h1>
    )
}

export default Card;