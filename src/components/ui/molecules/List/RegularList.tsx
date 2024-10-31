import React from 'react'

interface RegularListProps<T> {
	items: T[];
	ItemComponent: React.ElementType;
}

const RegularList = <T extends object>({ items, ItemComponent}: RegularListProps<T>) => {
	return (
		<div>
			{items.map((item, i) => (
				<ItemComponent key={i} {...item} />
			))}
		</div>
	)
}

export default RegularList