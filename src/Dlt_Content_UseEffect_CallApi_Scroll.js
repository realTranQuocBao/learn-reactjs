import { useEffect, useState } from 'react';

//Demo Mounted & Unmounted 
//Demo useEffect


/**
 * 1. Update DOM
 * - change title whem typing
 * 2. Call API
 * 3. Listen DOM event
 * - Scroll
 * - Resize
 * 4. Cleanup
 * - Remove listen / unsubcribe
 * - Clear timers 
 * 
 */

// 1. useEffect(callback)
// - Gọi callback mỗi khi component re-render
// - gọi callback sau khi component add element vào dom
// 2. useEffect(callback, [])
// - chỉ gọi callback 1 lần sau khi component mount
// 3. useEffect(callback, [deps])
// - callback sẽ được gọi lại mỗi khi deps thay đổi

// ------------------------
// all1. Callback luôn được gọi sau khi component mounted
// all2. Cleanup function luôn được gọi trước khi component unmounted

const tabs = ['posts', 'comments', 'albums'];

function Content() {
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState('posts');
    const [showGoToTop, setShowGoToTop] = useState(false);

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

    useEffect(() => {
        
        const handleScroll = () => {
            // console.log(window.scrollY);
            if(window.scrollY >= 200){
                //show
                setShowGoToTop(true);
            } else {
                //hide
                setShowGoToTop(false);
            }
            // setShowGoToTop(window.scrollY >= 200);
        }

        window.addEventListener('scroll', handleScroll);

        // Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll);            
        }
    }, []);

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
            {showGoToTop && (
                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20
                    }}
                >
                    Go to top
                </button>
            )}
        </div>
    )
}

export default Content;