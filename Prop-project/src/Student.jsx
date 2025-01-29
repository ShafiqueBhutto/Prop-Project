function Student(p)
{
    return(
        <div className="student">
            <p>Name: {p.name}</p>
            <p>Age: {p.age}</p>
            <p>Student: {p.Student ? "Yes" : "No"}</p>
        </div> 
    );
}
export default Student