import PropTypes from 'prop-types'
import Button from './Button'

// Process One
// const Header = (props) => {
//   return (
//     <header>
//         <h1>{props.title}</h1>
//     </header>
//   )
// }

// Process Two
const Header = ({ title, showForm, btnText }) => {

    return (
      <header className='header'>
          <h1>{title}</h1>
          <Button color={btnText ? 'red' : 'green'} text={btnText ? 'Close' : 'Add'} onClick={showForm} />
      </header>
    )
  }

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}


// CSS in JS
// const headingStyle = {
//     color: 'green',
//     backgroundColor: 'black',
// }

export default Header