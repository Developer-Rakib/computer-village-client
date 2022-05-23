import { useState } from "react";

const useAdmin = ()=>{
    const [admin, setAdmin]= useState(null)

    return [admin]
}
export default useAdmin;