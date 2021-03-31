
let initialState = { 
    menuElements: [
        {id: 1, name: "Главная", href: "/home"},
        {id: 2, name: "Блок1", href: "/block1"},
        {id: 3, name: "Вход", href: "/login"},
        {id: 4, name: "Регистрация", href: "/registration"} 
    ],
};

const menuItemReducer = (state = initialState, action) =>{
    switch(action.type){
        default:
            return state;
    }
};


export default  menuItemReducer;