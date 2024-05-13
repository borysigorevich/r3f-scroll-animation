import { Scroll, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React from 'react';

const Section = () => {
	return <section className={'h-screen'}>Some text</section>;
};

export const Overlay = () => {
	const scroll = useScroll();

	useFrame(() => {
		console.log(1 - scroll.curve(1 / 3, 1 / 3), 'curve');
	});

	return (
		<Scroll html>
			<Section />
			<Section />
			<Section />
		</Scroll>
	);
};
