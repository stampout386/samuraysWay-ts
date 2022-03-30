import {ActionType, SidebarDataType} from "./store";

let initialState = {
    friendsData:
        [{
            id: 1,
            name: 'Mike',
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0bxCh54WgCUuDt2QoGduhWe_bxLObQ1GW8w&usqp=CAU'
        },
            {id: 2, name: 'Kate', src: 'https://cspromogame.ru//storage/upload_images/avatars/1299.jpg'},
            {
                id: 4,
                name: 'Helga',
                src: 'https://russia-dropshipping.ru/800/600/https/proprikol.ru/wp-content/uploads/2019/08/krutye-kartinki-dlya-vk-24.jpg'
            }]
}

export const sidebarReducer = (state: SidebarDataType = initialState, action: ActionType): SidebarDataType => {
    return state
}