export interface ResponseSignInDTO {
    token: string, 
    user: userData,
    timestamp: number,
}


type userData = {
    username: string,
    id: string,
}