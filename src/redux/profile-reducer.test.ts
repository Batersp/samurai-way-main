import {addPostAC, deletePostAC, ProfilePageType, profileReducer} from './profile-reducer';

let state: ProfilePageType = {
    posts: [
        {id: 1, message: 'hey bro lets do it', likeCounts: 20},
        {id: 2, message: 'Great game', likeCounts: 34}
    ],
    profile: {
        aboutMe: '',
        contacts: {facebook: '', website: '', vk: '', twitter: '', instagram: '', youtube: '',
            github: '',
            mainLink: ''},
        fullName: '',
        lookingForAJob: false,
        lookingForAJobDescription: 'false',
        photos: {small: '', large: ''},
        userId: 0
    },
    status: ''
}

test('length of posts should be incremented', () => {
    let action = addPostAC('this is new post and text for them')



    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)
    expect(newState.posts[2].message).toBe('this is new post and text for them')

})

test('message of new post should be correct', () => {
    let action = addPostAC('this is new post and text for them')

    let newState = profileReducer(state, action)

    expect(newState.posts[2].message).toBe('this is new post and text for them')

})

test('like counts should be correct at new post', () => {
    let action = addPostAC('this is new post and text for them')

    let newState = profileReducer(state, action)

    expect(newState.posts[2].likeCounts).toBe(0)

})

test('after deleting length of post should be decrement', () => {
    let action = deletePostAC(1)

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(1)


})

test('after deleting length of post should not be decrement if id is incorrect', () => {
    let action = deletePostAC(5)

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(2)


})