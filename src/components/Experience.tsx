import { OrbitControls, ScrollControls } from '@react-three/drei';
import React from 'react';
import { Overlay } from './Overlay.tsx';
import { Office } from './WawaOffice.tsx';

export const Experience = () => {
	return (
		<>
			<ambientLight intensity={1} />
			<ScrollControls pages={3}>
				<Office />
				<Overlay />
			</ScrollControls>
			<OrbitControls enableZoom={false} />
		</>
	);
};
