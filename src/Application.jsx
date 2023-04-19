import Nullstack from 'nullstack'
import './Application.scss'
import Home from './Home'

class Application extends Nullstack {

  linksNav = [
    { name: 'Home', link: 'https://nullstack.app', icon: 'home' },
    { name: 'User', link: 'https://nullstack.app', icon: 'user' },
    { name: 'Pluadsass', link: 'https://nullstack.app', icon: 'squareplus' },
    { name: 'Settings', link: 'https://nullstack.app', icon: 'settings' },
    { name: 'Cart', link: 'https://nullstack.app', icon: 'cart' },
    { name: 'Activity', link: 'https://nullstack.app', icon: 'activity' },
    { name: 'Bookmarks', link: 'https://nullstack.app', icon: 'bookmarks' },
    { name: 'Activity', link: 'https://nullstack.app', icon: 'activity' },
    { name: 'GitHub', link: 'https://nullstack.app', icon: 'github' },
  ]

  renderSidebar() {
    return (
      <nav class='menu'>
        <input type='checkbox' class='menu-faketrigger' />
        <div class='menu-lines'>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul>
          {this.linksNav.map(item => (
            <li><img src={`/${item.icon}.svg`} /><a href={item.link}>{item.name}</a></li>
          ))}
        </ul>
      </nav>
    )
  }

  render() {
    return (
      <body>
        <Sidebar />
        <Home route="/"/>
      </body>
    )
  }
}

export default Application








