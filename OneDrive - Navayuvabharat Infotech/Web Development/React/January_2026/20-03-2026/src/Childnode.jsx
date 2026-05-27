const Childnode = ({ user = {}, value = {} }) => {
  const { name, age, city } = user
  console.log(user)
  const { fruit } = value
  console.log(value)

  return (
    <section>
      <div>{name}</div>
      <div>{age}</div>
      <div>{city}</div>
      <div>{fruit}</div>
    </section>
  )
}
export default Childnode