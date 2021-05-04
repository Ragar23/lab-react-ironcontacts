import React from "react"



 function SingleContact({contact, oneDelete}) {

    const {name, pictureUrl, popularity, id} = contact
    let popular = popularity.toFixed(2)

    return (
        <div>
            <ul>
                <li> Name {name} </li>
                <li> Picture <img src={pictureUrl} alt={name} height="250px"/></li>
                <li> Popularity {popular}</li>
                <button onClick={()=>{oneDelete(id)}} >DELETE</button>

               
            </ul>

            
        </div>
    )
}

export default SingleContact