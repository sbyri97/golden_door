import React, {useState, useEffect, useRef} from "react";
import Feed from './Feed'

import './Insta.css'


const LoadInsta = ({token, ...props}) => {
    const [feeds, setFeeds] = useState([])

    const tokenPrep = useRef(token);
    tokenPrep.current = token;

    useEffect(() => {
        const abortController = new AbortController();

        async function fetchProfile () {
            const fields = ['id', 'media_type', 'media_url']

            try {
                fetch(`https://graph.instagram.com/v16.0/me/media?fields=${fields}&limit=${props.limit}&access_token=${props.token}`)
                .then((resp) => {
                    setFeeds(resp.data.data)
                })

            } catch (err) {
                console.log('error', err);
            }
        }

        fetchProfile()

        return () => {
            abortController.abort();
        };
    }, [props.limit])

    return (
        <div className="mainInstadiv">
            {feeds.map((feed) => (
                <Feed key={feed.id} feed={feed} />
            ))}
        </div>

    )
};

export default LoadInsta;
