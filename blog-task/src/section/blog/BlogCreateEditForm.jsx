import { useState } from 'react';
import PropTypes from 'prop-types';
import Container from '../../components/Container';

function BlogCreateEditForm({ onSubmit, initialData = {} }) {
    const [title, setTitle] = useState(initialData.title || '');
    const [content, setContent] = useState(initialData.content || '');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ title, content });
    }


    return (
        <Container>
            <form onSubmit={handleSubmit} className='min-h-screen max-x-wl mx-auto mt-10 flex flex-col'>
                <label className="block mb-2">
                    Title:
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} className='w-full px-3 py-2 border border-gray-300 rounded mt-1' />
                </label>
                <label className='block mb-2'>
                    Content:
                    <textarea value={content} onChange={e => setContent(e.target.value)} className='w-full px-3 py-2 border border-gray-300 rounded mt-1 h-32' />
                </label>
                <button type="submit" className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 self-center'>Submit</button>
            </form>
        </Container>
    )
}

BlogCreateEditForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    initialData: PropTypes.shape({
        slug: PropTypes.string,
        title: PropTypes.string,
        date: PropTypes.string,
        content: PropTypes.string,
        author: PropTypes.string,
    })
};

export default BlogCreateEditForm;