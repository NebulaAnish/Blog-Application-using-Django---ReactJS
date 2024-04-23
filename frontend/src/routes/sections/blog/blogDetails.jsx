import MainLayout from "../../../layout/main"
import { useParams } from 'react-router-dom';
import useFetchBlogId from "../../../hooks/useFetchBlogId"
import BlogDetails from "../../../section/blog/BlogDetails";

function BlogDetailsRoute() {
  const { id } = useParams()
  const { data, isLoading } = useFetchBlogId(id)

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <MainLayout>
      {data && <BlogDetails data={data} />}
    </MainLayout>
  )
}

export { BlogDetailsRoute }
