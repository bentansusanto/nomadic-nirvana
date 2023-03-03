export interface NavLink{
    page : string,
    link : string
}

export interface Profile{
    _id : string,
    names : string
}

export interface Content{
    subtitle : string;
    title : string;
    content : string;
    image : string;
}

export interface Jurnal{
    rates : string;
    title : string;
}

export interface Service{
    icon : string;
    title : string;
    content : string;
}
