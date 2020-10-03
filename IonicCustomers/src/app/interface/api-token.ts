export class ApiToken {
    access_token:string
    error: string;
    error_description: string;
    grant_type: string;
    username: string;
    password: string;
    client_id: string;
    client_secret: string;
    
    constructor(usuario: string, pass: string){

        this.grant_type = 'password';
        this.username = usuario;
        this.password = pass;
        this.client_id = 'MJgIqPJxAMvLHCDG4vTwhHJBiIQYVSM82Mbij6dV';
        this.client_secret = 'NrQc6Bud2JcrNBQICcWitVQJThiMPdXXIAp5sOsVYchApExmq3WmVNI0WjygNQDJhcDCllzMOuvbLPi6fjr708FN9da0thpYVLY1JI72i1XPr4ksHD6ziDZrjX1HYAzD';
        
    }
    
}
