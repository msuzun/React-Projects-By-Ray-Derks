"use client"
import React, { useEffect, useState } from 'react'
import './Profile.css'
import Link from '../Link/Link';
import List from '../List/List';


const Profile = ({ userName }) => {
    const [loading, setLoading] = useState(false);
    const [profile, setProfile] = useState({});
    const items = [
        {
            field: 'html_url',
            value: <Link url={profile.html_url} title={profile.html_url} />
        },
        {
            field: 'repos_url',
            value: <Link url={profile.repos_url} title={profile.repos_url} />
        },
        {
            field: 'name',
            value: profile.name
        },
        {
            field: 'location',
            value: profile.location
        },
        {
            field: 'bio',
            value: profile.bio
        }
    ];
    useEffect(() => {
        async function fetchData() {
            const profile = await fetch(`https://api.github.com/users/${userName}`);
            const result = await profile.json();
            if (result) {
                setProfile(result);
                setLoading(false);
            }
        }
        fetchData();
    }, [userName])

    return (
        <>
            <div className='Profile-container'>
                <h2>About Me</h2>
                {loading ? (<span>Loading...</span>) :
                    (
                        // <ul>
                        //     {/* <img className='Profile-avatar' src={profile.avatar_url} alt={profile.name}/>
                        //     <li><span>avatar_url: </span><a href={profile.avatar_url}>{profile.avatar_url}</a></li>
                        //     <li><span>html_url: </span><a href={profile.html_url}>{profile.html_url}</a></li>
                        //     <li><span>repos_url: </span><a href={profile.repos_url}>{profile.repos_url}</a></li>
                        //     <li><span>name: </span>{profile.name}</li>
                        //     <li><span>location: </span>{profile.location}</li>
                        //     <li><span>bio: </span>{profile.bio}</li> */}
                        // </ul>
                        <List items={items} />
                    )}
            </div>

        </>
    )
}

export default Profile