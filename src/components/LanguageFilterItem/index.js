import './index.css'

const LanguageFilterItem = props => {
  const {item, clickTabItem, isActiveButton} = props
  const {language, id} = item

  const activeButton = isActiveButton ? 'active-tab-name' : ''

  const onClickTabItem = () => {
    clickTabItem(id)
  }

  return (
    <li className="tab-item">
      <button
        type="button"
        className={`tab-name ${activeButton}`}
        onClick={onClickTabItem}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
