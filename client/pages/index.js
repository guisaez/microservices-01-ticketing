import axios from 'axios';

const LandingPage = ({ currentUser }) => {
    console.log(currentUser);
   
    return <h1>Landing Page</h1>;
  };

LandingPage.getInitialProps = async () => {

    if(typeof window === 'undefined') {
        // we are on the server
        // requests should be made to http://ingress-nginx.ingress-nginx.svc.cluster.local
    }else{
        // we are on the browser
        // requests can be made using url ''
    }

    const response = await axios.get('http://ingress-nginx.ingress-nginx.svc.cluster.local/api/users/currentuser');
    
    return response.data;
}

export default LandingPage;