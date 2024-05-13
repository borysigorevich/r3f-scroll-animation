import { Canvas } from '@react-three/fiber';
import React from 'react';
import { Experience } from './components/Experience.tsx';

function App() {
	return (
		<div className={'h-full'}>
			<Canvas
				shadows
				camera={{ position: [2.3, 1.5, 2.3], fov: 64 }}
				gl={{
					preserveDrawingBuffer: true,
				}}
			>
				<Experience />
			</Canvas>
		</div>
	);
}

export default App;
