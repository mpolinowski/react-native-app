import React from 'react'

import {InputField, InputText} from './_styles'

const Header = (props) => {
    return (
        <InputField>
            <InputText>{props.title}</InputText>
        </InputField>
    )
}

export default Header