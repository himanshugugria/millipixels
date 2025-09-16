import { use, useState } from "react"
import Chip from "./Chip"


interface User{
    name:string,
    email:string,
    phoneNumber:number
}

function ContactDataRenderer() {
    
    const [user,setUser]=useState<User[]>([])
    const [contact,setContact]=useState<User>({name:'',email:'',phoneNumber:-1})
    const [query,setQuery]=useState<string>('')

    const handleSubmit=(e:React.FormEvent)=>{
        e.preventDefault()
        if(contact.name && contact.email && contact.phoneNumber){
            setUser((prevUser)=>[...prevUser,contact])
            setContact({name:'',email:'',phoneNumber:-1})
        }
    }

    const handleSearch=user.filter((contact)=>
        {return contact.name.toLowerCase().includes(query.toLowerCase())}
    )

  return (
    <>
    <div className="flex">
        <div className="m-10">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Name"
                    className="h-10 border-red-600 underline text-white border-4"
                    value={contact?.name}
                    onChange={(e)=>setContact({...contact,name:e.target.value})}
                />
                <input 
                    type="text" 
                    placeholder="Email"
                    className="h-10 border-red-600 underline text-white border-4"
                    value={contact?.email}
                    onChange={(e)=>setContact({...contact,email:e.target.value})}
                />
                <input 
                    type="number"
                    placeholder="Phone Number"
                    className="h-10 border-red-600 underline text-white border-4"
                    value={contact?.phoneNumber}
                    onChange={(e)=>setContact({...contact,phoneNumber:parseInt(e.target.value)})}
                />
                <button type="submit">
                    Add Contact
                </button>
            </form>
            <div>
                <ul>
                    {user.map((value:User,index:number)=>(
                        <li key={index}>
                            {/* {value.name} , {value.email} , {value.phoneNumber} */}
                            <Chip name={value.name} email={value.email} phoneNumber={value.phoneNumber}/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div className="m-10">
            <input 
                type="text" 
                placeholder="Search Bar"
                className="h-10 border-blue-600 underline text-white border-4"
                value={query}
                onChange={(e)=>setQuery(e.target.value)}
            />
            {query.length>0 && handleSearch.map((value:User,index:number)=>(
                <li key={index}>
                    <Chip name={value.name} email={value.email} phoneNumber={value.phoneNumber}/>
                </li>
            ))}
        </div>
    </div>
    </>
  )
}

export default ContactDataRenderer