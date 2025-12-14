import { db } from "@/db"
import { notFound } from 'next/navigation'
import SnippetEditForm from "@/components/snippet-edit-form";

interface SnippetShowPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function SnippetEditPage(props: SnippetShowPageProps){

    const { id } = await props.params;
    
    const snippet = await db.snippet.findFirst({
        where: { id: parseInt(id) },
    });

    if(!snippet){
        return notFound()
    }

    return <div>
      <h1 className="text-xl font-bold my-4">Edit snippet</h1>
      <SnippetEditForm snippet={snippet}/>
    </div>

}