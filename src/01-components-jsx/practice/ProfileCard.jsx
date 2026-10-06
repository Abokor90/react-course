function ProfileCard({ name, age, job, city }) {

  return (
    <div className="card">
      <h2>Name: {name.toUpperCase()}</h2>
      <p>Age: {age}</p>
      <p>Job: {job}</p>
      <p>City: {city}</p>
    </div>
  )
}

export default ProfileCard;