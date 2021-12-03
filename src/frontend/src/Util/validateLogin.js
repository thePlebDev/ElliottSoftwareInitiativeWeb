export default function validateLogin(values){

    let errors = {};
    if(!values.Username){
        errors.Username="PLEASE ENTER USERNAME"
    }
    else if(!values.Password){
        errors.Password="PLEASE ENTER PASSWORD"
    }

    return errors

}