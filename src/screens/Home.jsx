import React from 'react'

import Header from '../components/Header'
import ResultList from  '../components/ResultList'
import {RootView} from '../components/_styles'

const Home = () => {

        return (
            <RootView>
                <Header title={'Header'} />
                <ResultList />
            </RootView>
        )
}

export default Home