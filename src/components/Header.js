function Header(props){

const handleOnClick = () => {
    props.setUser("");
}

    return(
        <div>
            <h1>Welcome, {props.user}</h1>
            <button onClick={handleOnClick}>Logout</button>
            
        </div>
    )
}

export default Header;