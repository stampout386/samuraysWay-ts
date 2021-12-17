export type MessagesDataType = {
    id: number
    message: string
}
export type DialogsDataType = {
    id: number
    name: string
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


export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type ProfilePagePropsType = {
    profilePage: ProfilePageType
}
export type DialogsPagePropsType = {
    dialogsPage : DialogsPageType
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
            {id: 1, name: 'Mike'},
            {id: 2, name: 'Kate'},
            {id: 3, name: 'Kris'},
            {id: 4, name: 'Helga'},
            {id: 5, name: 'Stasy'},
            {id: 6, name: 'Natali'},
        ],
        messagesData: [
            {id: 1, message: "Hello"},
            {id: 2, message: "How are you?"},
            {id: 3, message: "You are calling me?"},
            {id: 4, message: "i didn't hear,sorry"},
        ]
    }
}

