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

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	const handleSubmit = () => {
		//call api
		console.log({
			name,
			email
		});
	}

	return (
		<div style={{ padding: 32 }}>
		Name:
		<input
			value={name}
			onChange={e => setName(e.target.value)}
		/><br/>
		Email:
		<input
			value={email}
			onChange={e => setEmail(e.target.value)}
		/><br/>
		<button onClick={handleSubmit} >Register</button>
		</div>
	)
}

export default App;
