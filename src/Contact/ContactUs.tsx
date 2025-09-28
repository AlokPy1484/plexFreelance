import './ContactUs.css'
import {useForm, type SubmitHandler} from 'react-hook-form';
import {z} from 'zod';
import './Contact.css'
import { zodResolver } from "@hookform/resolvers/zod";

//defining schema 
const schema = z.object({
    access_key: z.string().min(1, "Missing access key"),
    email: z.string().email(),
    message: 
    z.string()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(500, { message: "Message cannot exceed 500 characters" }),
});

//infering type from schema
type FormFields = z.infer<typeof schema>; 


function ContactUs(){
        //declareing useForm hook
        const { register, handleSubmit, setError, formState: { errors, isSubmitting,isSubmitSuccessful } } = useForm<FormFields>({
                                                                                            defaultValues:{email:"plex@gmail.com",},
                                                                                            resolver: zodResolver(schema)});
    
        //defining our onSubmit function with proper typeing||making it a async function
        const onSubmit: SubmitHandler<FormFields> = async (data) => {
            try{
            console.log(data);
                await fetch("https://api.web3forms.com/submit", {method: "POST",
                                    headers: {
                                                "Content-Type": "application/json",
                                                Accept: "application/json",},})
 
        }
            catch(error){
                setError("root", {
                    message: "Reached maximum limit",
                })
            }
        }

    return(
        <div className='formWrapper'>
            <div className="aboutCWrapper">
            <div className='contactContainer'>
                <div className='title'><h2>Let's</h2><h1>Chat</h1></div>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eaque, eum saepe reiciendis eveniet qui debitis suscipit! Impedit a quibusdam esse dolorum perferendis velit qui?</p>
            </div>
            <div className='formContainer'>
                <form onSubmit={handleSubmit(onSubmit)} className='form'>
                    {/* validating input feild values */}
                    <h1>Enter Email</h1>

                    <input type="hidden" value="cdadd40d-dfa8-4fb4-8473-75be0660cf8a"{...register("access_key")}/>
                    <input {...register("email")} type="text" placeholder="Email"/>{errors.email && <div><p style={{ color: "red" }}>{errors.email.message}</p></div>}
                    <h1>Write your messages here</h1>
                    <input className='messageBox' {...register("message")} 
                        type="textarea" 
                        placeholder="Enter your message" />{errors.message && <div><p style={{ color: "red" }}>{errors.message.message}</p></div>}
                    {errors.root && <div><p style={{ color: "red" }}>{errors.root.message}</p></div>}
                    {isSubmitSuccessful && <p style={{ color: "green" }}>Message sent successfully!</p>}
                        <div className='submitButton'><button disabled={isSubmitting} type="submit">{isSubmitting ? "Loading..." : "Submit"}</button></div>
                </form>
            </div>
        </div>
        </div>
    )
}


export default ContactUs