import '../assets/styles/atomsTextInput.css'

function InputTextLogin({ field, placeholder = "", type = "text" }) {
    return (
        <>
            <label className='labelInp' htmlFor="field">{field}</label>
            <input className='loginInp' id={field} type={type} placeholder={placeholder} />
        </>
    );
}

export default InputTextLogin;