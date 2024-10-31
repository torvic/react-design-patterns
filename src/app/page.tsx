import SmallBookListItem from "@/modules/books/components/ui/molecules/SmallBookListItem/SmallBookListItem";
import SmallAuthorListItem from "@/modules/author/components/ui/molecules/SmallAuthorListItem/SmallAuthorListItem";
import RegularList from "@/components/ui/molecules/List/RegularList";

export interface Book {
	name?: string;
	price?: string;
	title?: string;
} 

export interface Author {
	name?: string;
	bio?: string;
	website?: string;
}

const books: Book[] = [
  { name: 'Book One', price: '$10', title: 'First Book' },
  { name: 'Book Two', price: '$15', title: 'Second Book' },
  { name: 'Book Three', price: '$20' }, // Sin título
]
const authors: Author[] = [
    { name: 'J.K. Rowling', bio: 'British author, best known for the Harry Potter series.', website: 'https://www.jkrowling.com/' },
    { name: 'George R.R. Martin', bio: 'American novelist and short story writer, known for A Song of Ice and Fire.', website: 'https://www.georgerrmartin.com/' },
    { name: 'Agatha Christie', bio: 'English writer known for her detective novels, particularly those featuring Hercule Poirot.' } // Sin website
  ];

export default function Home() {
  return (
		<div className="m-4">
			<RegularList items={books} ItemComponent={SmallBookListItem} />
			<RegularList items={authors} ItemComponent={SmallAuthorListItem} />
		</div>
)
}
