"use client"
import Feed from '@/components/home/Feed'
import LeftSidebar from '@/components/home/LeftSidebar'
import Rightbar from '@/components/home/RightBar'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect } from 'react'
import { UserDataContext } from '../context/UserContext'

const page = () => {
    const { userData } = useContext(UserDataContext)
    const router = useRouter()
    console.log(userData);


    useEffect(() => {
        if (userData == null) return
        if (!userData) {
            router.push("/login")
        }
    }, [userData])

    return (
        <div className='max-h-screen flex'>
            <LeftSidebar />
            <Feed />
            <Rightbar />
        </div>
    )
}

export default page
