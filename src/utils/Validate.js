


export const CheckValidate=(email,password)=>{
    const isemailValid =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    const ispasswordvalid =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)
    // const isusernamevalid=/^[a-zA-Z0-9][a-zA-Z0-9\s@#$%^&*()\-+=\\\[\]{}|;:'",.<>?`~]*$/.test(username)
    //  if(!isusernamevalid) return "Username is not valid";
     if(!isemailValid) return "Email address not valid";
     if(!ispasswordvalid) return "Password is not valid";
     

     return null;

};