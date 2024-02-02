import React, { ReactNode } from 'react'

interface Props {
    showWhen: boolean;
    children: ReactNode
}

const Conditional = ({showWhen, children}: Props ) => {
    if (showWhen) return <>{children}</>
    
    return (
        <></>
  )
}

export default Conditional