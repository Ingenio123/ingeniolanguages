import gravatar from 'gravatar'

const image = (email,picture=null )=>{

    let user = window.localStorage.getItem('user')
    user = JSON.parse(user)
    picture =  user.picture

    let profile = '';
    if(picture !== null){
        profile =  `${picture}`

    }else{
        profile = gravatar.url(email, {s: '100', r: 'x', d: 'retro'}, true);
    }

    return profile;
}
export default image;