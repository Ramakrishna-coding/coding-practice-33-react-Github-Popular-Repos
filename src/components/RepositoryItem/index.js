import './index.css'

const RepositoryItem = props => {
  const {repoItemDetails} = props
  const {name, issuesCount, forksCount, starsCount, avatarUrl} = repoItemDetails
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

export default RepositoryItem
