import MainLayout from "../../../layout/main"
// import { generateDummyBlogPostData } from "../../../../dummy"
import BlogList from "../../../components/BlogList"
import useFetchBlog from "../../../hooks/useFetchBlog"

function BlogRoute() {
  const { data, isLoading } = useFetchBlog()
  console.log(data)

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <MainLayout>
    {data &&  <BlogList blogList={data} />}
    </MainLayout>
  )
}

export { BlogRoute }
