import Student from "./Student"
import PropTypes from "prop-types"
function App() {

  return (
   <>
    <Student name = "Shafique Bhutto" age = {23} Student = {false}></Student>
    <Student name = "Shah jaan" age = {21} Student = {true}></Student>
    <Student name = "Shahvez" age = {22} Student = {false}></Student>
    <Student name = "Kashif" age = {22} Student = {true}></Student>
   </>
  )
}
Student.propTypes ={
  name: PropTypes.string,
  age: PropTypes.number,
  Student: PropTypes.bool
}
export default App
