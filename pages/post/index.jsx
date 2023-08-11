import React, { useState, useEffect } from 'react';
import axios from 'axios';


import { useGlobalData } from '@/hooks/useGlobalContext';
import Header from '@/components/Header';



const Post = () => {




    const {LoginInfo} = useGlobalData();
    console.log('logininfo', LoginInfo)

    const [Form, setForm] = useState({_id: '', title: '', content: ''}) 
    const [List, setList] = useState([])
    const { _id, title, content } = Form;

    const getData = async () => {
        const res = await axios.get('/api/post');
        const data = res.data;
        // console.log('dd?', data)
        return data;
    }

    const updateData = async () => {
        const res = await axios.post('/api/post', {title: title, content: content });
        const data = res.data;

        setList(prev => [data, ...prev])
    }

    const handleChange = e => {
        const { name, value } = e.target;
        const newForm = {
            ...Form,
            [name]: value,
        }
        setForm(newForm)
        console.log(Form)
    }



    const handleSubmit = e => {
        e.preventDefault();
        updateData()
    }

    useEffect(() => {
        getData().then(d => setList(d.reverse()))
    }, [])


    return (
        <div>
            <Header />
            post page

            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={handleChange} name={"title"} />
                <input type="text" value={content} onChange={handleChange} name={"content"} />
                <button>submit!</button>
            </form>

            <div>
                <h2>list</h2>
                {List?.map((item, idx) => <div key={idx} style={{ borderBottom: "1px solid #ddd", padding: "20px" }}>
                    <p>id: {item._id}</p>
                    <p>title: {item.title}</p>
                    <p>content: {item.content}</p>
                </div>)}
            </div>
        </div>
    );
};

export default Post;