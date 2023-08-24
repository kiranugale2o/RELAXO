const date=new Date();
const Profiledata=[
   {
    name:"Relaxo guest",
  username:"@relaxo_guest00",
  profileImg:"https://firebasestorage.googleapis.com/v0/b/relaxo-social.appspot.com/o/postimg%2Fprofiledp.jpg?alt=media&token=b0f8e52d-4592-4996-9afd-a53fda1e12b8",
  userback:"https://firebasestorage.googleapis.com/v0/b/relaxo-social.appspot.com/o/backend-images%2Friyaback.jpg?alt=media&token=2c120c28-62e5-4955-b9a4-855a2b730725",
  userbio:"Relaxo The Social Network",
  userlink:"",
  userjoin:`Joined by ${date.getDate()+"_"+date.getMonth()+"_"+date.getFullYear()}`,
  followers:0,
  following:0,
  post:0,
   }
]
export  default Profiledata;