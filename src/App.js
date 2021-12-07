import { useState } from 'react';
import Content from './Content';


// // Fake comments
// function emitComment(id) {
// 	setInterval(() => {
// 		window.dispatchEvent(
// 			new CustomEvent(`lesson-${id}`, {
// 				detail: `Nội dung comment của lesson ${id}`
// 			})
// 		)
// 	}, 2000)
// }

// emitComment(1);
// emitComment(2);
// emitComment(3);
// emitComment(4);
// emitComment(5);

function App() {
	const [show, setShow] = useState(false);

	return (
		<div style={{ padding: 32 }}>
			<button
				onClick={() => setShow(!show)}
			>Toggle</button>
			{show && <Content />}
		</div>
	)
}

export default App;
