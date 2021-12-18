export type MessagesDataType = {
    id: number
    message: string
}
export type DialogsDataType = {
    id: number
    name: string
    src: string
}
export type DialogsPageType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
}
export type PostDataType = {
    id: number
    message: string
    like: number
}
export type ProfilePageType = {
    postData: Array<PostDataType>
}
export type FriendsDataType = {
    id: number
    name: string
    src: string
}
export type SidebarDataType ={
    friendsData : Array<FriendsDataType>
}


export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebarPage: SidebarDataType
}

export type ProfilePagePropsType = {
    profilePage: ProfilePageType
}
export type DialogsPagePropsType = {
    dialogsPage: DialogsPageType
}
export type SideBarPropsType = {
    sidebarPage : SidebarDataType
}

export let state: RootStateType = {
    profilePage: {
        postData: [
            {
                id: 1,
                message: "Hello,how are you?",
                like: 15

            },
            {
                id: 2,
                message: "This is my first post!",
                like: 40

            },
            {
                id: 3,
                message: "This is my second post,I like it!",
                like: 105

            }
        ]
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: 'Mike', src: 'https://www.blast.hk/attachments/68493/'},
            {id: 2, name: 'Kate', src: 'https://cspromogame.ru//storage/upload_images/avatars/1299.jpg'},
            {id: 3, name: 'Kris', src: 'https://russia-dropshipping.ru/800/600/https/proprikol.ru/wp-content/uploads/2019/08/krutye-kartinki-dlya-vk-22.jpg'},
            {id: 4, name: 'Helga', src: 'https://russia-dropshipping.ru/800/600/https/proprikol.ru/wp-content/uploads/2019/08/krutye-kartinki-dlya-vk-24.jpg'},
            {id: 5, name: 'Stasy', src: 'https://www.meme-arsenal.com/memes/45bd46f032da02c02977e72df72e3369.jpg'},
            {id: 6, name: 'Natali', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoIAao3RTHBzzfzkppcdaJuCjWoSHJGzIXeA&usqp=CAU'},
        ],
        messagesData: [
            {id: 1, message: "Hello"},
            {id: 2, message: "How are you?"},
            {id: 3, message: "You are calling me?"},
            {id: 4, message: "i didn't hear,sorry"},
        ]
    },
    sidebarPage: {
        friendsData:
[{id: 1, name: 'Mike', src: 'https://www.blast.hk/attachments/68493/'},
{id: 2, name: 'Kate', src: 'https://cspromogame.ru//storage/upload_images/avatars/1299.jpg'},
{id: 4, name: 'Helga', src: 'https://russia-dropshipping.ru/800/600/https/proprikol.ru/wp-content/uploads/2019/08/krutye-kartinki-dlya-vk-24.jpg'}]
    }
}

