import BlogView from "./BlogView";
import PropTypes from "prop-types";
import Container from './Container';
import { paths } from "../routes/path";
import { useNavigate, Link } from "react-router-dom";
import useApi from "../hooks/useApi";
import { useEffect } from "react";




const BlogList = ({ blogList }) => {
    const { remove } = useApi();
    const navigate = useNavigate();

    const handleEdit = (id) => {
        navigate(paths.blog.edit(id));
    }

    const handleDelete = (id) => {
        remove(`/blogs`, id);
    }

    const handleView = (id) => {
        navigate(paths.blog.detail(id));
    }

    return (
        <div className="blog-list">
            <div className="flex items-center justify-center p-8">
                <h2 className="text-3xl font-bold">Welcome to our Blog</h2>
            </div>
            <div className="text-center">
            <button className="mx-auto p-2 bg-blue-600 rounded-lg text-white hover:bg-blue-500">
            <Link to={paths.blog.create}>Create New</Link>
            </button>


            </div>

            <Container>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-4 py-6">
                    {blogList.map((blog) => (
                            <BlogView key={blog.id} blog={blog} onEdit={handleEdit} onDelete={handleDelete} onView={handleView}/>
                        
                    ))}
                </div>
            </Container>
        </div>
    );
}

BlogList.propTypes = {
    blogList: PropTypes.arrayOf(
        PropTypes.shape({
            slug: PropTypes.string,
            title: PropTypes.string,
            created_at: PropTypes.string,
            content: PropTypes.string,
            author: PropTypes.string,
        })
    ),
};

export default BlogList;