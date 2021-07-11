import { useEffect,useState,React } from "react";

export const initLoading = (Wrapper) => {
    return () => {

        const [loaddata,setData] = useState(null);

        useEffect(() => {
            fetch();
        },[])

        const fetch = async() => {
            const tmpLoad = localStorage.getItem('log');
            
            if(tmpLoad.length === 0){
                setData([{name:"sample",text:"sample"}]);
            }else{
                const load = JSON.parse(tmpLoad);
                setData(load);    
            }
        }

        const Loading = (
            <div>ロード中</div>
        )

        return loaddata ? <Wrapper loadData={loaddata} /> : Loading;
    }
}
