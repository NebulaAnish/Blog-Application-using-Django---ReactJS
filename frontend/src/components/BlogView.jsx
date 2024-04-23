import Proptypes from 'prop-types';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import moment from 'moment';

const BlogView = ({ blog, onEdit, onDelete, onView }) => {
    return (
        <div className="relative shadow p-4 hover:cursor-pointer">
            <Popover className="absolute top-0 right-0 mt-2 mr-2">
                <Popover.Button className="text-2xl">...</Popover.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                >
                    <Popover.Panel className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="py-1">
                            <button onClick={() => onView(blog.slug)} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">View</button>
                            <button onClick={() => onEdit(blog.slug)} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Edit</button>
                            <button onClick={() => onDelete(blog.slug)} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Delete</button>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
            <h1 className="text-2xl font-bold">{blog.title}</h1>
            {/* <p className="text-gray-500 text-sm">By {blog.author}</p> */}
            <p className="text-gray-500 text-sm">{moment(blog.date).format('MMMM Do YYYY')}</p>
            <p className="pt-4 overflow-hidden overflow-ellipsis whitespace-nowrap">{blog.content}</p>
        </div>
    )
}

BlogView.propTypes = {
    blog: Proptypes.shape({
        slug: Proptypes.string,
        title: Proptypes.string,
        created_at: Proptypes.string,
        content: Proptypes.string,
        author: Proptypes.string,
    }),
    onEdit: Proptypes.func,
    onDelete: Proptypes.func,
    onView: Proptypes.func,
}

export default BlogView;