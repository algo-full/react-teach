const Form = ({children, ...props}) =>{
    console.log(props)
    return <form 
        style={{border:"1px solid red"}}
        {...props}
    >
        {children}
    </form>
}
export default Form