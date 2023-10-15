import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Chats = () => {
    const [chats, setChats] = useState([]);

    const fetchChats = async () => {
        const { data } = await axios.get("http://localhost:5000/api/chat/")
        setChats(data);
    }

    useEffect(() => {
        fetchChats();
    }, [])


    return (
        <div>
            {
                chats.map(c => (
                    <div key={c._id}>
                        <p>{c._id}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default Chats;