import React from "react";
import { useState,useEffect } from "react";
import { Link} from "react-router-dom";

const Allresult = () => {
    return (
         <div className=" text-center d-flex py-2 justify-content-center">
          
        <tr>
             <td>
                <Link class="btn btn-primary " to={`/Result`}>
                  Class-1 to 8
                </Link>
            </td>
                <td>
                  <Link class="btn btn-primary " to={`/Result10`}>
                  Result class-9-10
                </Link>
                </td>
     </tr>
     </div>
    )
}
export default Allresult;