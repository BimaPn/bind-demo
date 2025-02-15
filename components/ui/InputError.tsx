type InputErrorT = {
    message ?:string | null,
    className ?:string,   
}
const InputError = ({message,className}:InputErrorT) => {
    return message ? (
        <p className={'text-sm text-red-600 ' + className}>
          {message}
        </p>
    ) : null;
}

export default InputError
