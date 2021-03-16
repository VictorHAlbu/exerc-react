import React from 'react'
import Input from './Input'

const Form = () => {
    return (
        <form>
            <p>
                <label htmlFor="nome"> Nome</label>
                <Input />
            </p>

            <p>
                <label htmlFor="email"> Email</label>
                <Input />
            </p>
            
        </form>
    )
}

export default Form
