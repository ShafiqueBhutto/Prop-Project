import logo from './assets/Modern Mentor.png'
function Card(){
    return(
        <div className="card">
            <img className='card-image' src={logo} alt="my picture"></img>
            <h2 className='card-title'>Modern Mentor</h2>
            <p className='card-text'>I make the documentary videos and practice of the react</p>
        </div>
    );
}
export default Card