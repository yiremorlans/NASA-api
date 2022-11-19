

const Header = ({getDate, fetchDate}) => {
  console.log(getDate, fetchDate)
  return (
    <>
        <h1 className='heading'>NASA's Picture of the Day</h1>
        
        <input type="date" name="date" value={getDate} onChange={event => fetchDate(event.currentTarget.value)}/>
    </>
    
  )
}

export default Header