import {Text, View, Image} from 'react-native'
import styled from 'styled-components/native';

export const RootView = styled(View)`
    flex: 1;
`

export const InputField = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 70px;
    padding: 5%;
    background-color: dodgerblue;
    margin-bottom: 5%;
`

export const InputText = styled(Text)`
    font-weight: 500;
    font-size: 22px;
    color: white;
`

export const ItemWrapper = styled(View)`
    border-bottom-width: 0px;
    border-color: #eee;
    box-shadow: 0px 1px 1px #eee;    
    margin: 10px 5px 0 5px;
    padding: 7px;
`

export const ItemSection = styled(View)`
    border-bottom-width: 1px;
    border-color: #eee;
    flex-direction: column-reverse;
    justify-content: space-around;
    position: relative;
    padding: 5px;
`

export const ItemHeader = styled(Text)`
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
`

export const ItemImage = styled(Image)`
    height: 400px;
    width: 100%;
`