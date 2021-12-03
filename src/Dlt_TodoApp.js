import { useState } from 'react';

function App() {
	const jobsLocalStorage = localStorage.getItem('jobs');

	const [jobInput, setJobInput] = useState('');
	const [jobs, setJobs] = useState(JSON.parse(jobsLocalStorage) ?? []);

	const handleAddJob = () => {
		const newJob = {
			id: 1,
			name: jobInput
		}


		setJobs(prev => {
			const newJobs = [...prev, newJob];

			const jsonJobs = JSON.stringify(newJobs)

			localStorage.setItem('jobs', jsonJobs);

			return newJobs;
		})
		setJobInput('')
	} 

	const deleteJob = (id) => {
		console.log(id);
	}

	return (
		<div style={{ padding: 32 }}>
			<input
				type="text"
				value={jobInput}
				onChange={e => setJobInput(e.target.value)}
			/>
			<button onClick={handleAddJob} >Add</button>
			<ul>
				{jobs.map((job, index) => (
					<li
						key={index}
						onClick={deleteJob(index)}
					>
						{job.name}
					</li>
				))}
			</ul>
		</div>
	)
}

export default App;
