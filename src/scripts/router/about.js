
import userInfo from '@/views/userInfo';
import userInfoq from '@/views/userInfoq';
import userInfow from '@/views/userInfow';

const AboutCildren = [
    {
        path: '/userInfo',
        component: userInfo,
        meta: {
            navName: "点击了解洲子哥"
        }
    },
    {
        path: '/userInfoq',
        component: userInfoq,
        meta: {
            navName: "点击发现洲子哥"
        }
    },
    {
        path: '/userInfow',
        component: userInfow,
        meta: {
            navName: "洲子哥自我评价"
        }
    }
]

export default AboutCildren