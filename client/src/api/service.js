import axios from 'axios';

const service = axios.create({
  baseURL: '/api',
});

const errorHandler = err => {
  // console.error(err);
  throw err;
};

export default {
  service,

  handleUpload (theFile) {
    // console.log('file in service: ', theFile)
    return service.post('/upload', theFile)
      .then(res => res.data)
      .catch(errorHandler);
  },

  saveNewProfileImg (newImg) {
    // console.log('new thing is: ', newThing)
    return service.post('/profileImg/create', newImg)
      .then(res => res.data)
      .catch(errorHandler);
  },

  saveNewImg (newImg) {
    // console.log('new thing is: ', newThing)
    return service.post('/boardImg/create', newImg)
      .then(res => res.data)
      .catch(errorHandler);
  }
}