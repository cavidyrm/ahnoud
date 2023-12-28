const IconInformation = (props: Icon) => {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.99917 5.33341C7.90717 5.33341 7.83251 5.40808 7.83317 5.50008C7.83317 5.59208 7.90784 5.66675 7.99984 5.66675C8.09184 5.66675 8.16651 5.59208 8.16651 5.50008C8.16651 5.40808 8.09184 5.33341 7.99917 5.33341" stroke={props.stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M8 14V14C4.686 14 2 11.314 2 8V8C2 4.686 4.686 2 8 2V2C11.314 2 14 4.686 14 8V8C14 11.314 11.314 14 8 14Z" stroke={props.stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.99984 8V11.3333" stroke={props.stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export default IconInformation;