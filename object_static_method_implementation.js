const apiUser={
    id:101,
    name:"sanidhya",
    role:"admin",
    active:true
}

console.log("keys:",Object.keys(apiUser))
console.log("Values:",Object.values(apiUser))
console.log("entries:",Object.entries(apiUser))


if(Object.hasOwn(apiUser,"role")){
    console.log(
        "user role exist:",apiUser.role
    )
}

const defaultSetting={
    theme:"light",
    language:"en",
    Noti:"yes"
}

const userSetting={
    theme:"dark"
}

const finalSetting= Object.assign({},defaultSetting,userSetting);
console.log("Final Setting:",finalSetting);

const Permission= Object.create(null);
Permission.read= true
Permission.write=true

console.log("Permission:",Permission);


const systemRule={
    minpass:8,
    maxpass:14
}

Object.freeze(systemRule)
console.log("is system rule freeze",Object.isFrozen(systemRule));

const userProfile={
    username:"name1",
    age:25
}

Object.seal(userProfile);
userProfile.age=9
console.log(
    "is userprofile is sealed",Object.isSealed(userProfile)
)

Object.preventExtensions(apiUser)
console.log(
    "api user is extensible?",Object.isExtensible(apiUser)
)

const secureData=Object.create(null);
secureData.token="kkdj"
console.log("secureData prototype:", Object.getPrototypeOf(secureData));