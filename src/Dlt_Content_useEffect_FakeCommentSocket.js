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
// all3. Cleanup function luôn được gọi trước khi xallback được gọi (trước component mounted)

const lessons = [
    {
        id: 1,
        name: "Thế nào là giáo lý?"
    },
    {
        id: 2,
        name: "Giáo lý và Thần học"
    },
    {
        id: 3,
        name: "Canh tân giáo lý"
    },
    {
        id: 4,
        name: "Chủ đích của Giáo lý"
    },
    {
        id: 5,
        name: "Giáo lý với Thánh Kinh"
    },
]

function Content() {
    const [lessonId, setLessonId] = useState(1);

    const handleComment = ({detail}) => {
        console.log(detail);
    }

    useEffect(() => {
        window.addEventListener(`lesson-${lessonId}`, handleComment);

        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment);
        }
    }, [lessonId])
    
    return (
        <div>
            <ul>
                {lessons.map(lesson => (
                    <li
                        key={lesson.id}
                        onClick={()=>setLessonId(lesson.id)}
                        style={{
                            color: lesson.id===lessonId ?
                                '#f00' : '#333'
                        }}
                    >
                        {`Bài ${lesson.id}: ${lesson.name}`}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Content;