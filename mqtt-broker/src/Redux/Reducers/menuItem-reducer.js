
let initialState = { 
    menuElements: [
        {id: 1, name: "Главная", href: "/home"},
        {id: 2, name: "Как", href: "/howto"},
        // {id: 3, name: "Вход", href: "/login"},
        // {id: 4, name: "Регистрация", href: "/registration"} 
    ],
    sidemenuElements: [
        {id: 1, name: "Вход", href: "/login"},
        {id: 2, name: "Регистрация", href: "/registration"} 
    ]
};

const menuItemReducer = (state = initialState, action) =>{
    switch(action.type){
        default:
            return state;
    }
};


export default  menuItemReducer;