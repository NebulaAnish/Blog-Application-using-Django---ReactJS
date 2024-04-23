import PropTypes from 'prop-types';
import Container from '../../components/Container';
import moment from 'moment';

function BlogDetails({ data }) {
    return (
        <Container>
            <div className="min-h-screen">
                <h1 className='text-3xl font-bold mb-4 mt-12'>{data.title}</h1>
                <p className='text-sm text-gray-500 mb-8'>Posted by {data.author} on {moment(data.date).format('MMMM Do YYYY')}</p>
                <div className='prose'>{data.content}</div>
            </div>
        </Container>
    )
}

BlogDetails.propTypes = {
    data: PropTypes.shape({
        slug: PropTypes.string,
        title: PropTypes.string,
        created_at: PropTypes.string,
        content: PropTypes.string,
        author: PropTypes.string,
    })
};

export default BlogDetails;