
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMagnifyingGlass, faUser, faMusic, faCalendarDays, faHeart, faCartShopping, faMugHot } from '@fortawesome/free-solid-svg-icons'

export const IconsDemo = () => {
  return (
    <>
      <div className='d-flex align-items-center mt-4 flex-column items-center'>
        <h1>Font Awesome ICONS</h1>
        <div className='d-flex gap-4 mt-3'>
          <FontAwesomeIcon icon={faHouse} size='2xl' />
          <FontAwesomeIcon icon={faMagnifyingGlass} size='2xl' />
          <FontAwesomeIcon icon={faUser} size='2xl' />
          <FontAwesomeIcon icon={faMusic} size='2xl' />
          <FontAwesomeIcon icon={faCalendarDays} size='2xl' />
          <FontAwesomeIcon icon={faHeart} size='2xl' />
          <FontAwesomeIcon icon={faCartShopping} size='2xl' />
          <FontAwesomeIcon icon={faMugHot} size='2xl' />
        </div>
      </div>
    </>
  )
}
