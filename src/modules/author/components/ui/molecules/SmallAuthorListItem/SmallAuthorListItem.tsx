import React from 'react'

interface AuthorProps {
  name: string
  bio: string
  website?: string // Hacemos que website sea opcional
}

const SmallAuthorListItem = ({ name, bio, website }: AuthorProps) => {
  return (
    <div className='p-4 border rounded shadow'>
      <h2 className='text-xl font-semibold'>{name}</h2>
      <p className='text-gray-600'>{bio}</p>
      {website && (
        <a
          href={website}
          className='text-blue-500 hover:underline'
          target='_blank'
          rel='noopener noreferrer'
        >
          Visit Website
        </a>
      )}
    </div>
  )
}

export default SmallAuthorListItem
