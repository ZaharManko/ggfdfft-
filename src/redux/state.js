//import { reRenderTree } from "../render"
const ADD_POST = 'ADD-POST'
const APDATE_NEW_POST_TEXT = 'APDATE-NEW-POST-TEXT'
const APDATE_NEW_MESSAGE_BODY = 'APDATE-NEW-MESSAGE-BODY'
const NEW_MESSAGE_BODY = 'NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'
let store = {
    _state: {
        ProfilePage: {
            DialogsData: [
                {
                    name: 'Arhupchuc',
                    id: '1'
                },
                {
                    name: 'Zaharchuc',
                    id: '2'
                },
                {
                    name: 'Makarchuc',
                    id: '3'
                },
                {
                    name: 'Sopa',
                    id: '4'
                },
            ],
            PostsData: [
                { message: 'hello bro', likeCount: '3', id: 1 },
                { message: 'ukiu rthrty6 ty67 7  ', likeCount: '6', id: 2, },
                { message: 'rf4t5 tr yrty ', likeCount: '9', id: 3, },
                { message: 'ui687 ryrerty 6 ', likeCount: '3', id: 4 },
            ],
            newPostText: 'hello from state - new post text'
        },
        DialogsPage: {
            MessagesData: [
                { id:3,  message: 'fre rtgtrg tht h' },
                { id:2,  message: 'dgr tgtry56 trgy 65' },
                { id:1, message: ' 5y65 56 tyj tyjyr' },
                { id:0, message: 'y6u htyy tyjy uj 5' },
            ],
            newMessageBody:''
        }

    },
    _reRenderTree() {
        console.log('sate was changed')
    },
    _addPost() {
        let newPost = {
            likeCount: 5,
            message: this._state.ProfilePage.newPostText,
            id: 5,
        } 
        this._state.ProfilePage.PostsData.push(newPost)
        this._state.ProfilePage.newPostText = ''
        this._reRenderTree(this.state)
    },
    _upddatNewPostText(newText) {

        this._state.ProfilePage.newPostText = newText
        this._reRenderTree(this._state)
    },
    callSubscriber(obsarver) {
        this._reRenderTree = obsarver
    },
    getSate() {
        return this._state
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            this._addPost()
        } else if (action.type === APDATE_NEW_POST_TEXT) {
            this._upddatNewPostText(action.newText)
        }else if(action.type === APDATE_NEW_MESSAGE_BODY){
            console.log(action.body)//працює
            this._state.DialogsPage.newMessageBody = action.body
            //this.callSubscriber(this._state)
        }
        else if(action.type === SEND_MESSAGE){
            let body = this._state.DialogsPage.newMessageBody
            this._state.DialogsPage.MessagesData.push({id:4, message: body })
           // this._state.DialogsPage.newMessageBody = ''
            console.log(this._state.DialogsPage.MessagesData)
            this.callSubscriber(this._state)
        }
        /*else if(action.type === APDATE_NEW_MESSAGE_BODY){
            this._state.DialogsPage.newMessageBody = action.body
            this.callSubscriber(this._state)
        }else if(action.type === SEND_MESSAGE){
            let body = this._state.DialogsPage.newMessageBody ;
            this._state.DialogsPage.newMessageBody = '';
            this._state.DialogsPage.message.push({id:7, message:body})
            this._reRenderTree(this._state)
        }*/
    }
}

export const addPostActionCreator = () =>( { type:ADD_POST } )
export const appDateNewPostCreator = (newText) =>( { type:APDATE_NEW_POST_TEXT, newText } )
export const sendMessageCreator = () =>({type: SEND_MESSAGE})
export const upDateNewMessageBodyCreator = (body) =>({type:APDATE_NEW_MESSAGE_BODY, body:body,})

export default store;