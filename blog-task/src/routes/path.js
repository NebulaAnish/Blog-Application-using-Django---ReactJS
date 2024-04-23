export const paths = {
    root: "/blog",
    auth: {
        login: "/auth/login",
        register: "/auth/register",
    },
    blog: {
        list: '/blog',
        detail: (id) => `/blog/${id}/details`,
        create: '/blog/create',
        edit: (id) => `/blog/${id}/edit`, 
    }

}