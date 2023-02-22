import React,{useState} from 'react';
import { useRouter } from 'next/router';


const FormRegister = () => {
    const [fullName, setFullName] = useState<string>('')
    const [phoneNumber, setPhoneNumber] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const base_Url = 'https://web-service.herokuapp.com'
    const router = useRouter()
 
    const submitRegister = async(e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch(`${base_Url}/auth/register`, {
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify({
                    fullName,
                    phoneNumber,
                    email,
                    password
                })
            });
            if(!response.ok){
                throw new Error("Error register")
            }
            // console.log(response)
            router.push('/login')
            
        } catch (error) {
            console.log({message : error})
        }
    }

  return (
    <div>
      <form onSubmit={submitRegister} className="w-[20rem]">
        <div className="mb-3 space-y-2">
          <label htmlFor="#" className="font-medium">
            Name
          </label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your name"
            className="bg-[#f5f5f5] rounded-sm w-full px-2 py-3"
          />
        </div>
        <div className="mb-3 space-y-2">
          <label htmlFor="#" className="font-medium">
            Phone Number
          </label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter your phone number"
            className="bg-[#f5f5f5] rounded-sm w-full px-2 py-3"
          />
        </div>
        <div className="mb-3 space-y-2">
          <label htmlFor="#" className="font-medium">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="bg-[#f5f5f5] rounded-sm w-full px-2 py-3"
          />
        </div>
        <div className="mb-3 space-y-2">
          <label htmlFor="#" className="font-medium">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="bg-[#f5f5f5] rounded-sm w-full px-2 py-3"
          />
        </div>
        <div className="mb-3">
          <button className="bg-dark-blue rounded-sm py-3 w-full text-white font-medium uppercase text-[.9rem]">
            Create new account
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormRegister;
