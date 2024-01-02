import emailjs from 'emailjs-com';

const sendEmail = (templateParams) => {
  emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_PUBLIC_KEY')
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    }, (error) => {
      console.log('FAILED...', error);
    });
}

export default sendEmail;