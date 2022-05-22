import React from 'react'
import {Linking} from 'react-native'

import {ItemWrapper, ItemSection, ItemHeader, ItemImage} from './_styles'
import Button from './Button'

const ResultDetails = ({brand}) => {
    return (
        <ItemWrapper>
            <ItemSection>
                <ItemHeader>{brand.brand}</ItemHeader>
                <ItemHeader>{brand.model[0].name}</ItemHeader>
            </ItemSection>
            <ItemSection>
                <ItemImage source={{ uri: brand.model[0].image}} />
            </ItemSection>
            <ItemSection>
                <Button 
                    buttonPress = {() => {
                        Linking.openURL(brand.model[0].url)
                    }} />
            </ItemSection>
        </ItemWrapper>
    )
}

export default ResultDetails