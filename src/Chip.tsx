
interface User{
    name:string,
    email:string,
    phoneNumber:number
}

function Chip({name,email,phoneNumber}:User) {
  return (
    <>
    <div className='flex'>
        <div className='m-4'>
            NAME:-{name}
        </div>
        <div className='m-4'>
            EMAIL:-{email}
        </div>
        <div className='m-4'>
            PHONE-NUMBER:-{phoneNumber}
        </div>
    </div>
    </>
  )
}

export default Chip