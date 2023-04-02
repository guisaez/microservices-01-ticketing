import axios from "axios";

const buildClient = ({ req }) => {
    if( typeof window === 'undefined'){
        // We are on the server

        return axios.create({
            baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
            headers: req.headers
        });

    }else{
        // We must be on the browser
        return axios.create({
            baseURL: 'http://www.ticketing-app-prod.world/', // If local you would replace this with '/'
            headers: req.headers, // not needed with local 
        })
    }   
}

export default buildClient;