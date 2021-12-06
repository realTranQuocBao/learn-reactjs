import { useEffect, useState } from 'react';

//Demo Mounted & Unmounted 
//Demo useEffect

// 1. useEffect(callback)
// - Gọi callback mỗi khi component re-render
// - gọi callback sau khi component add element vào dom
// 2. useEffect(callback, [])
// - chỉ gọi callback 1 lần sau khi component mount
// 3. useEffect(callback, [deps])
// - callback sẽ được gọi lại mỗi khi deps thay đổi

// ------------------------
// all1. Callback luôn được gọi sau khi component mounted

const tabs = ['posts', 'comments', 'albums'];

function Content() {
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState('posts');

    //TH1:
    // useEffect(() => {
    //     console.log('useEffect');
    //     document.title = title;
    // });

    //TH2:
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => res.json())
    //         .then(posts => setPosts(posts))
    // }, []);

    //TH3:
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => setPosts(posts))
        
        console.log(type);
    }, [type]);



    return (
        <div>

            {tabs.map(tab => (
                <button
                    key={tab}
                    onClick={() => setType(tab)}
                    style={type===tab?{
                        color: '#fff',
                        background: '#333'
                    }:{}}  
                >
                    {tab}
                </button>
            ))}

            <input
                value={title}
                type="text"
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Content;