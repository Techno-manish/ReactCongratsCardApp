const element = (
  // Write your code here.
  <div className='bgContainer'>
    <h1 className='mainHeading'>Congratulation</h1>
    <div className='cardContainer'>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'
        className='profileImg'
      />
      <h1 className='name'>Kiran V</h1>
      <p>Vallor Institute of Computer Education and Technology.</p>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'
        className='watchImg'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
