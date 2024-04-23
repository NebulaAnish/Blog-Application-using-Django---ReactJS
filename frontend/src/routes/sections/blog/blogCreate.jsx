import MainLayout from "../../../layout/main"
import BlogCreateEditForm from "../../../section/blog/BlogCreateEditForm"
import useApi from "../../../hooks/useApi"
import { BACKEND_URL } from "../../../config-global"

function BlogCreateRoute() {
  const { post } = useApi()

  const handleSubmit = async (values) => {
    console.log(values)
    const response = await post("/blogs/", values)
    console.log(response)
  }

  return (
    <MainLayout>
      <BlogCreateEditForm onSubmit={handleSubmit} />
    </MainLayout>
  )
}

export { BlogCreateRoute }
