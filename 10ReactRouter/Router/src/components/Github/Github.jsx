import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData();

    // const [data, setData] = useState({});

    // useEffect(() => {
    //     fetch("https://api.github.com/users/saakshikobarne")
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data);
    //         })
    // }, [])

    return (
        <div className='bg-gray-700 m-3 p-3 text-white flex flex-col items-center'>
            <div>Github Useraname: {data.login}</div>
            <div>Name of user: {data.name}</div>
            <div className='mb-4 text-center'>Github followers: {data.followers}</div>
            <div>
                <img src={data.avatar_url} alt='github picture' height={200} width={200} />
            </div>
        </div>
    );
}

export default Github;

export const githubInfoLoader= async()=>{
    const res= await fetch('https://api.github.com/users/saakshikobarne')
    return res.json()
}
