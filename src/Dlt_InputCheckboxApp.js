import { useState } from 'react';

const courses = [
	{
		id: 1,
		name: 'HTML/CSS'
	},
	{
		id: 2,
		name: 'NodeJS'
	},
	{
		id: 3,
		name: 'ReactJS'
	}
]

function App() {

	// const [name, setName] = useState('');
	const [checked, setChecked] = useState([]);

	console.log(checked);

	const isCheck = (courseId) => {
		return checked.includes(courseId)
	}

	const handleCheck = (courseId) => {
		//call api
		setChecked(prev => {
			if(isCheck(courseId)) {
				return checked.filter(item => item!=courseId)
			} else {
				return [...prev, courseId]
			}
		})
	}
	const handleSubmit = () => {
		//call api
		console.log(checked.sort());
	}

	return (
		<div style={{ padding: 32 }}>
			{courses.map(course => (
				<div key={course.id}>
					<input
						type="Checkbox"
						value={course.id}
						checked={checked.includes(course.id)}
						onChange={() => handleCheck(course.id)}
					/> {course.name}
				</div>
			))}

			<button onClick={handleSubmit} >Register</button>
		</div>
	)
}

export default App;
