import RazorpayCheckout from 'react-native-razorpay';

export const KEY_ID = __DEV__ ? 'rzp_test_trPkviHlyca1Zt' : 'MY_LIVE_KEY';
export default async (info, callBack) => {
  var options = {
    key: KEY_ID,
    image: 'https://i.imgur.com/3g7nmJC.png',
    /* description: 'Credits towards consultation', 
        currency: 'INR', 
        amount: '5000',
        name: 'foo',
        prefill: {
          email: 'void@razorpay.com',
          contact: '9191919191',
          name: 'Razorpay Software'
        }, */
    ...info,
    theme: {color: '#00C569'},
  };
  RazorpayCheckout.open(options)
    .then((data) => {
      // handle success
      callBack && callBack({error: false, data});
      //alert(`Success: ${data.razorpay_payment_id}`);
    })
    .catch((error) => {
      // handle failure
      callBack && callBack({error: true, data: null});
      //alert(`Error: ${error.code} | ${error.description}`);
    });
};
