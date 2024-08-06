export interface User {
    email: string;
    username: string;
    country: string;
    telephone: string;
    name: string;
    last_name: string;
    auth_id: string;
    password: string;
}

export interface Login {
    email: string;
    password: string;
}