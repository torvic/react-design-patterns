import React from 'react'

interface Props {
	name: string;
	price: string;
	title: string;
}

const SmallBookListItem = ({ name, price }: Props) => {
	return (
		<>
			<h2>{name}</h2>
			<p>{price}</p>
		</>
	)
}

export default SmallBookListItem