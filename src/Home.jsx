import Nullstack from 'nullstack'
import './Home.scss'

class Home extends Nullstack {

  prepare({ project, page }) {
    page.title = `${project.name}`
  }

  render() {
    return (
      <section>
      </section>
    )
  }

}

export default Home
