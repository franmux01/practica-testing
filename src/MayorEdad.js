const MayorEdad = () =>{
    if(age < 0){
        return null
    }
    else if (age >= 18){
        return true;
    }
    else{
        return false;
    }
}