import {useForm, type SubmitHandler} from 'react-hook-form';
import {z} from 'zod';
import './Contact.css'
import { zodResolver } from "@hookform/resolvers/zod";

//defining schema 
const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
});

//infering type from schema
type FormFields = z.infer<typeof schema>;



function Contact(){

    //declareing useForm hook
    const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm<FormFields>({
                                                                                        defaultValues:{email:"plex@gmail.com",},
                                                                                        resolver: zodResolver(schema)});

    //defining our onSubmit function with proper typeing||making it a async function
    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        try{
        await new Promise((resolve) => setTimeout(resolve, 1000));
        throw new Error();
        console.log(data);}
        catch(error){
            setError("root", {
                message: "Reached maximum limit",
            })
        }
    }

    return(
        <div>
            {/* "handleSubmit" validates form input before passing it to onSubmit */}
            <div className='formWrapper' onSubmit={handleSubmit(onSubmit)}>
                <form className='formCContainer'>
                    {/* validating input feild values */}
                    <input {...register("email")} type="text" placeholder="Email"/>{errors.email && <div><p style={{ color: "red" }}>{errors.email.message}</p></div>}

                    <input {...register("password")} 
                        type="password" 
                        placeholder="Password" />{errors.password && <div><p style={{ color: "red" }}>{errors.password.message}</p></div>}
                    <button disabled={isSubmitting} type="submit">{isSubmitting ? "Loading..." : "Submit"}</button>
                    {errors.root && <div><p style={{ color: "red" }}>{errors.root.message}</p></div>}
                </form>
            </div>


        </div>
    )
}

export default Contact



// password pattern

// At least 8 characters
// At least 1 uppercase letter
// At least 1 lowercase letter
// At least 1 number
// At least 1 special character