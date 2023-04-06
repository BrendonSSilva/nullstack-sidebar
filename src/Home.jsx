import Nullstack from 'nullstack'
import './Home.scss'

class Home extends Nullstack {

  prepare({ project, page, greeting }) {
    page.title = `${project.name} - ${greeting}`
    page.description = `${project.name} was made with Nullstack`
  }

  render() {
    return (
      <section>
      </section>
    )
  }

}

export default Home
