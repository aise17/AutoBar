export class ApiToken{

    grant_type: string;
    usuario: string;
    pass: string;
    client_id: string;
    client_secret: string;
    

    

    constructor(usuario: string, pass: string){

        this.grant_type = 'password';
        this.usuario = usuario;
        this.pass = pass;
        this.client_id = 'lRXzM1RQdlerCUl0ZrWmnpXpYuLfAjoWHRhQmDRn';
        this.client_secret = 'EoGblkjmbc3udHZfeXA86hQNKGljnoNxIngiYjRVAgFsbnChclTTld8Asmp7M1M5looLJptSsvB5do8Jjqa4QZDCTd3L5SZFMDq9vH0sKpHEf1kiLAIUvrFn77ECLdkU';
        
    }

 

}