import { useGLTF, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import React, { useLayoutEffect, useRef } from 'react';
import { Group } from 'three';

const FLOOR_HEIGHT = 2.3;
const NB_FLOORS = 3;

export function Office(props) {
	const { nodes, materials } = useGLTF('/models/WawaOffice.glb');

	const mainGroupRef = useRef<Group>(null);
	const timelineRef = useRef<gsap.core.Timeline>(null);
	const libraryRef = useRef<Group>(null);
	const atticRef = useRef<Group>(null);

	const scroll = useScroll();

	useFrame(() => {
		timelineRef.current.seek(scroll.offset * timelineRef.current.duration());
	});

	useLayoutEffect(() => {
		timelineRef.current = gsap.timeline();

		timelineRef.current.to(
			mainGroupRef.current.position,
			{
				duration: 2,
				y: -FLOOR_HEIGHT * (NB_FLOORS - 1),
			},
			0
		);

		timelineRef.current.to(
			mainGroupRef.current.rotation,
			{
				duration: 1,
				x: 0,
				y: Math.PI / 6,
				z: 0,
			},
			0
		);

		timelineRef.current.to(
			mainGroupRef.current.rotation,
			{
				duration: 1,
				x: 0,
				y: -Math.PI / 6,
				z: 0,
			},
			1
		);

		timelineRef.current.to(
			mainGroupRef.current.position,
			{
				duration: 1,
				x: -1,
				z: 2,
			},
			0
		);

		timelineRef.current.to(
			mainGroupRef.current.position,
			{
				duration: 1,
				x: 1,
				z: 2,
			},
			1
		);

		timelineRef.current.from(
			libraryRef.current.position,
			{
				duration: 0.5,
				x: -2,
			},
			0.5
		);

		timelineRef.current.from(
			libraryRef.current.rotation,
			{
				duration: 0.5,
				y: -Math.PI * 0.5,
			},
			0
		);

		timelineRef.current.from(
			atticRef.current.position,
			{
				duration: 1.5,
				x: 2,
			},
			0
		);

		timelineRef.current.from(
			atticRef.current.position,
			{
				duration: 0.5,
				z: -2,
			},
			1.5
		);

		timelineRef.current.from(
			atticRef.current.rotation,
			{
				duration: 0.5,
				y: Math.PI * 0.5,
			},
			1
		);
	}, []);

	return (
		<group {...props} dispose={null} ref={mainGroupRef}>
			<mesh geometry={nodes['01_office'].geometry} material={materials['01']} />
			<group position={[0, 2.114, -2.23]}>
				<group ref={libraryRef}>
					<mesh
						geometry={nodes['02_library'].geometry}
						material={materials['02']}
					/>
				</group>
			</group>
			<group position={[-1.97, 4.227, -2.199]}>
				<group ref={atticRef}>
					<mesh
						geometry={nodes['03_attic'].geometry}
						material={materials['03']}
					/>
				</group>
			</group>
		</group>
	);
}

useGLTF.preload('/models/WawaOffice.glb');
