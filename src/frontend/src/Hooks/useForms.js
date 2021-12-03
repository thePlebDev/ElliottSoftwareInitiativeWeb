import {useState} from 'react';



const useForm=(validateFunction)=>{
    const [state,setState] = useState({Username:"",Password:""})
    const [errors,setErrors] = useState({Username:"",Password:""})

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setState({...state,[name]:value})

    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        setErrors(validateFunction(state))
    } 

    return{
        state,
        handleSubmit,
        handleChange,
        errors
    }
}


export default useForm

