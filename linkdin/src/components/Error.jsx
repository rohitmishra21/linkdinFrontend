import React from 'react'

const Error = ({ msg }) => {


    return (
        <div>
            <h1 className='text-red-600 font-medium'>{msg}</h1>
        </div>
    )
}

export default Error
