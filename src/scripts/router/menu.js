
import index from '@/views/index';
import About from '@/views/about';
import outerss from '@/views/outerss';
import AboutCildren from './about';

const routes = [
    {
        path: '/',
        component: index,
        meta: {
            navName: "首页"
        }
    },
    {
        path: '/About',
        component: About,
        meta: {
            navName: "洲子哥"
        },
        children: AboutCildren
    },
    {
        path: '/outerss',
        component: outerss,
        meta: {
            navName: "罗哥"
        }
    }
]

export default routes