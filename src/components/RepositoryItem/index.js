import {Component} from 'react'
import './index.css'

class RepositoryItem extends Component {
  state = {repoItem: {}}

  componentDidMount() {
    this.getRepoItem()
  }

  getRepoItem = async () => {
    const {details} = this.props
    const updatedData = {
      name: details.name,
      id: details.id,
      issuesCount: details.issues_count,
      forksCount: details.forks_count,
      starsCount: details.stars_count,
      avatarUrl: details.avatar_url,
    }
    this.setState({repoItem: updatedData})
  }

  render() {
    const {repoItem} = this.state
    const {name, issuesCount, forksCount, starsCount, avatarUrl} = repoItem
    return (
      <li className="repo-item">
        <div className="center">
          <img src={avatarUrl} alt={name} className="repo-img" />
          <p className="repo-name">{name}</p>
        </div>
        <div className="repo-count">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
            className="count-img"
          />
          <p className="count">{starsCount} starts</p>
        </div>
        <div className="repo-count">
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
            className="count-img"
          />
          <p className="count">{forksCount} forks</p>
        </div>
        <div className="repo-count">
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open issues"
            className="count-img"
          />
          <p className="count">{issuesCount} open issues</p>
        </div>
      </li>
    )
  }
}

export default RepositoryItem
