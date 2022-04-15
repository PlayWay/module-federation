import {useEffect, useState} from "react";
import {axiosData} from "../api/axios";

export default function useRequest({
                               url,
                               method = 'GET',
                               params = null,
                               timeout = 5000,
                               headers = {}
                           },lazy = false) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!lazy) {
            fetchData()
        }
    }, [])

    async function fetchData() {
        setLoading(true)
        const {data:fetchData,loading:fetchLoading,error:fetchError} = await axiosData({url, method, params, timeout, headers})
        setData(fetchData)
        setLoading(fetchLoading)
        setError(fetchError)
    }



    // custom hook returns value
    return {data, error, loading,fetchData};
}
