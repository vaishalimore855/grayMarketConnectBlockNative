import React from 'react'
import Header from '../../Header/Header'
import Claim from '../Claim/Claim'
import Calcutate from '../Earnings/Calcutate'
import Stake from '../Stake/Stake'
import Statistics from '../Statistics/Statistics'
import Trading from '../Trading/Trading'

const Dashboard = () => {
    return (
        <>
            <Trading></Trading>
            <Statistics></Statistics>
            <Stake></Stake>
            <Claim></Claim>
            <Calcutate></Calcutate>
        </>
    )
}

export default Dashboard
