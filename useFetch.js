

import  { useEffect, useState } from 'react'

const LocalCache={};

export const useFetch = (url) => {

    const [state,setState]=useState({
        data:null,
        isLoading:true,
        hashError:null,
        error:null,

    })
    
    useEffect(() => {
      getFetch();

    }, [url]);

    const stateIsloading = () => {
        setState({     
            data:null,
            isLoading:true,
            hashError:null,
            error:null,

        })
    }

    const getFetch = async()=> {
        if (LocalCache[url]) {
            console.log(LocalCache[url]);
            setState({data:LocalCache[url].data,
                isloading:false,
                hashError:false,
                error: null,

            })
            
            return
        }


        const resp= await fetch(url);
        stateIsloading();

        await new Promise(resolve => setTimeout(resolve,500));
       

        if (!resp.ok) {
            setState({
                data:null,
                isloading:false,
                hashError:true,
                error: {
                    code:resp.status,
                    message:resp.statusText,
                }
            });
            return;
        }

        const data= await resp.json();

        setState({
            data:data,
            isloading:false,
            hashError:false,
            error: null,
        })

        LocalCache[url]={data};
       
    }
    
  return {
    data:state.data,
    isloading:state.isLoading,
    hashError:state.hashError

  }
}


