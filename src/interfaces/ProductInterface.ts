export interface ProductInterface {
    id : number,
    name : string,
    description : string,
    price : number,
    createdAt : Date,
    updatedAt : Date,
    userId : number
}

export interface ProductoNuevo {
    name : string,
    description : string,
    price : number,    
}

export interface ProductoActualizar {
    id : number,
    name : string,
    description : string,
    price : number,        
}