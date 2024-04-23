import MainLayout from "../../../layout/main"
import useApi from "../../../hooks/useApi"
import useFetchBlogId from "../../../hooks/useFetchBlogId"
import BlogCreateEditForm from "../../../section/blog/BlogCreateEditForm"
import { useParams } from 'react-router-dom';

function BlogEditRoute() {
  const { patch } = useApi()
  const { id } = useParams()
  const { data, isLoading } = useFetchBlogId(id)

  const handleSubmit = async (values) => {
    console.log(values)
    const response = await patch("/blogs", id, values)
  }

  if (isLoading || !data) {
    return <div>Loading...</div>
  }

  return (
    <MainLayout>
      <BlogCreateEditForm onSubmit={handleSubmit} initialData={data} />
    </MainLayout>
  )
}

export { BlogEditRoute } 
