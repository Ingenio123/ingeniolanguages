import gravatar from 'gravatar'
const image = (email)=>{
    // var profile = gravatar.profile_url(`${email}`, {protocol: 'https'});
    var profile = gravatar.url(email, {s: '100', r: 'x', d: 'retro'}, true);

    return profile;
}
export default image;