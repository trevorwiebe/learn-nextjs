import {db} from '@/db'
import Link from 'next/link';

export default async function Home() {

  const snippets = await db.snippet.findMany();

  let content

  if(snippets.length === 0){
    content = <h1 className='text-center'>No snippets found. Please add some.</h1>
  }else{
    content = snippets.map((snippet) => {
      return (
        <Link 
          key={snippet.id}
          href={`/snippets/${snippet.id}`}
          className='flex justify-between items-center p-2 border rounded'
        >
          <div>{snippet.title}</div>
          <div>View</div>
        </Link>
      )
    })
  }

  return (
    <div>
      <div className='flex my-2 justify-between item-center'>
        <h1 className='text-xl font-bold mt-2'>Snippets</h1>
        <Link href="/snippets/new" className="border p-2 rounded">New</Link>
      </div>
      <div className='flex flex-col gap-2'>
        {content}
      </div>
    </div>
  );
}
