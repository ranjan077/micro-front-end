import React, { useEffect , useRef} from 'react'
import { mount } from 'auth/AuthApp'
import { useHistory } from 'react-router-dom'


export default () => {
    const elemRef = useRef(null)
    const history = useHistory()
    useEffect(() => {
        if(elemRef.current) {
            // mounting marketing component
            const { onParentNavigation } = mount(elemRef.current, {
                initialPath: history.location.pathname,
                onNavigate: ({pathname: nextPathName}) => {
                    const { pathname } = history.location
                    if(pathname !== nextPathName) {
                       history.push(nextPathName)
                    }
                }
            })
            history.listen(onParentNavigation)
        }
    }, [])
    return <div ref={elemRef} />
}