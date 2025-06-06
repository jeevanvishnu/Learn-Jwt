export const getLoginPage = (req , res) =>{
    try {
        res.render('login')
    } catch (error) {
        console.log(error.message);
        
    }
}

export const getSignupPage = (req , res) =>{
    try {
        res.render("signup")
    } catch (error) {
        console.log(error.message);
        
    }
}