import {v4 as uuidv4} from 'uuid';
import Home from '../../App/assets/images/Icons/akar-icons_home.png'
import Group from '../../App/assets/images/Icons/akar-icons_people-group.png'
import List from '../../App/assets/images/Icons/ant-design_unordered-list-outlined.png'
import BookMark from '../../App/assets/images/Icons/bi_bookmark.png'
import User from '../../App/assets/images/Icons/bx_user.png'
import Notification from '../../App/assets/images/Icons/carbon_notification-new.png'
import Subscription from '../../App/assets/images/Icons/carbon_user-favorite.png'
import Messages from '../../App/assets/images/Icons/charm_messages.png'
import More from '../../App/assets/images/Icons/More.png'
import Card from '../../App/assets/images/Icons/ic_twotone-add-card.png'


const token = localStorage.getItem('access_token');
const menuItems = [
    {
        id: uuidv4(),
        title: 'Home',
        icon: Home,
        //link: '/'
    },
    {
        id: uuidv4(),
        title: 'Notification',
        icon: Notification,
        //link: '/notification'
    },
    {
        id: uuidv4(),
        title: 'Messages',
        icon: Messages,
        //link: '/messages'
    },
    {
        id: uuidv4(),
        title:  'Bookmarks',
        icon: BookMark,
        //link: '/bookmark'
    },
    {
        id: uuidv4(),
        title: 'Lists',
        icon: List,
        //link: '/list'
    },
    {
        id: uuidv4(),
        title: 'Groups',
        icon: Group,
        //link: '/people'
    },
    {
        id: uuidv4(),
        title: 'Subscriptions',
        icon: Subscription,
        //link: '/favorite'
    },
    {
        id: uuidv4(),
        title: 'Add Card',
        icon: Card,
        //link: '/card'
    },
  
    {
        id: uuidv4(),
        title: token ? 'My Profile' : 'Login',
        icon: User,
        //link: '/user'
    },
    {
        id: uuidv4(),
        title:  'More',
        icon: More,
        //link: '/more'
    },
   
]

export default menuItems;