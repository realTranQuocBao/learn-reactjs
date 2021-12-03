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
	const [checked, setChecked] = useState();

	console.log(checked);
	const handleSubmit = () => {
		//call api
		console.log({id: checked});
	}

	return (
		<div style={{ padding: 32 }}>
			{courses.map(course => (
				<div key={course.id}>
					<input
						type="radio"
						value={course.id}
						checked={checked === course.id}
						onChange={() => setChecked(course.id)}
					/> {course.name}
				</div>
			))}

			<button onClick={handleSubmit} >Register</button>
		</div>
	)
}

export default App;
