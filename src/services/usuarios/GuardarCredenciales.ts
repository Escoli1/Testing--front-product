export const CredencialesStore = (token : string, email : string ) => {
    localStorage.setItem('token', token);
    localStorage.setItem('autenticate', 'true');
    localStorage.setItem('usuario', email)
}

export const CredencialesClear = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('autenticate');
    localStorage.removeItem('usuario');
    localStorage.clear();
}