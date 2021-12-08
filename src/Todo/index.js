import { useReducer, useRef } from 'react';
import reducer, { initState } from './reducer'
import { addJob, setJob, deleteJob } from './action'
import logger from './logger';

function Content() {
    const [state, dispatch] = useReducer(logger(reducer), initState);

    const inputRef = useRef();

    const { job, jobs } = state;

    const handleSubmit = () => {
        dispatch(addJob(job));
        dispatch(setJob(''));
        inputRef.current.focus();
    }

    return (
        <div>
            <h1>TodoApp with Producer</h1>
            <input
                type="text"
                placeholder="Enter todo..."
                value={job}
                onChange={e => {
                    dispatch(setJob(e.target.value))
                }}
                ref={inputRef}
            />
            <button
                onClick={handleSubmit}
            >Add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>
                        {job}
                        <span
                            onClick={() => dispatch(deleteJob(index))}
                        >&times;</span>
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default Content;