import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

const apiStatusText = {
  isSuccess: 'SUCCESS',
  isFailure: 'FAILURE',
  inProgress: 'INPROGRESS',
  isInitial: 'INITIAL',
}

class GithubPopularRepos extends Component {
  state = {
    reposList: [],
    isButtonActive: languageFiltersData[0].id,
    apiStatus: apiStatusText.isInitial,
  }

  componentDidMount() {
    this.getApiList()
  }

  getApiList = async () => {
    const {isButtonActive} = this.state
    console.log(isButtonActive)
    this.setState({apiStatus: apiStatusText.inProgress})
    const url = `https://apis.ccbp.in/popular-repos?language=${isButtonActive}`
    const response = await fetch(url)
    console.log(response)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.setState({
        reposList: data.popular_repos,
        apiStatus: apiStatusText.isSuccess,
      })
    } else if (response.status === 401) {
      this.setState({apiStatus: apiStatusText.isFailure})
    }
  }

  clickTabItem = id => {
    this.setState({isButtonActive: id})
    this.getApiList()
  }

  apiStatusCodes = () => {
    const {reposList, apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusText.isSuccess:
        return (
          <ul className="repos-list">
            {reposList.map(each => (
              <RepositoryItem key={each.id} details={each} />
            ))}
          </ul>
        )
      case apiStatusText.isFailure:
        return (
          <div className="error-box">
            <img
              src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
              alt="failure view"
              className="error-img"
            />
            <h1 className="error-msg">Something Went Wrong</h1>
          </div>
        )
      case apiStatusText.inProgress:
        return (
          <div className="loader">
            <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
          </div>
        )
      default:
        return null
    }
  }

  render() {
    const {isButtonActive} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Popular</h1>
        <ul className="buttons-list">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              key={each.id}
              item={each}
              clickTabItem={this.clickTabItem}
              isActiveButton={isButtonActive === each.id}
            />
          ))}
        </ul>
        {this.apiStatusCodes()}
      </div>
    )
  }
}

export default GithubPopularRepos
