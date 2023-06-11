import React, { useEffect , useRef} from 'react'
import { mount } from 'dashboard/DashBoardApp'

export default () => {
    const elemRef = useRef(null)
    useEffect(() => {
        if(elemRef.current) {
            // mounting dashboard component
             mount(elemRef.current)
        }
    }, [])
    return <div ref={elemRef} />
}