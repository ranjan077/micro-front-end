import React, { useEffect , useRef} from 'react'
import { mount } from 'marketing/MarketingApp'


export default () => {
    const elemRef = useRef(null)
    
    useEffect(() => {
        if(elemRef.current) {
            // mounting component
            mount(elemRef.current)
        }
    }, [])
    return <div ref={elemRef} />
}