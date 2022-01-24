import RNTwitterSignIn from '@react-native-twitter-signin/twitter-signin';
   
const Constants = {
    //Dev Parse keys
    TWITTER_COMSUMER_KEY: 'crgZIanOswuWBnbgBOOmtg8nR',
    TWITTER_CONSUMER_SECRET: '99qr7RJha1MvtANzcCBWZUkql9ZQPp8kQnjuX1UEKv2tuqvr1k',
  };

  export const twitterSignIn = async (callBack) => {
    try {
        RNTwitterSignIn.init(
            Constants.TWITTER_COMSUMER_KEY,
            Constants.TWITTER_CONSUMER_SECRET,
          );
          RNTwitterSignIn.logIn()
          .then(loginData => {
            console.log({loginData});
            const {authToken, authTokenSecret} = loginData;
            if (authToken && authTokenSecret) {
             console.log({authToken,authTokenSecret});
            }
          }).catch(e=>{
            /* const str =`${e?.message}`
            const str1 =str.substring(str.indexOf("NativeMap:")+10) 
            const finalKeyStr= JSON.parse(str1.substring(0, str1.length - 1)); 
            const {name,userID,userName} =finalKeyStr
            callBack&&callBack({name,userID,userName}) */
             
          })

    } catch (error) {
      console.log({error});
    }
  };