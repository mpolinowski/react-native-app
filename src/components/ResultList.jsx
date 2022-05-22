import React from 'react'
import {ScrollView} from 'react-native'
import axios from 'axios'

import ResultDetails from './ResultDetails'

class ResultList extends React.Component {

    constructor() {
        super()
        this.state = { resultList: [] }
    }

    componentDidMount() {
        axios.get('https://givecars.herokuapp.com/')
            .then((response) => {
                this.setState({ resultList: response.data })
            })
    }

    renderList = () => {
        return this.state.resultList.map((brand) => {
            return <ResultDetails brand={brand} key={brand.model[0].name} />
        })
    }

    render() {
        console.log(this.state)
        return (
            <ScrollView>
                { this.renderList() }
            </ScrollView>
        )
    }
}

export default ResultList