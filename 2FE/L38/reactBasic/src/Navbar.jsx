import './Navbar.css'

const Navbar = ()=>{
    return(
        <>
            <div class="nav">
                <div class="logo">
                    <h1>Medium</h1>
                </div>
                <div class="link">
                    <a href="#">Our story</a>
                    <a href="#">Membership</a>
                    <a href="#">Write</a>
                    <a href="#">Sign in</a>
                    <a id="spclNavLink" href="#">Get started</a>
                </div>
            </div>
        </>
    )
}

export default Navbar;