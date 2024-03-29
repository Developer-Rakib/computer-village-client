import { useState } from "react";
import axiosPrivate from "../api/axiosPrivate";

const useAdmin = (user) => {
    const [admin, setAdmin] = useState()
    const [adminLoading, setAdminLoading] = useState(true)
    // console.log(admin);
    axiosPrivate.get(`https://computer-village.onrender.com/admin/${user.email}`)
        .then(data => {
            // console.log(data.data);
            setAdmin(data.data.admin)
            setAdminLoading(false)
        })

    return [admin, adminLoading]
}
export default useAdmin;