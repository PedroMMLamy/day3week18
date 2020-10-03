import axios from 'axios';

const service = axios.create({
  baseURL: 'https://dog.ceo/api'
});

export const getAllBreeds = async () => {
  try {
    const response = await service.get('/breeds/list/all')
    const objectOfBreeds = response.data.message;
    const breeds = Object.keys(objectOfBreeds);
    return breeds
  } catch (error) {
   return error
  }
}


const DOG_BREED_SERVICE = {
  listAllBreeds: () => {
    return new Promise((resolve, reject) => {
      service
        .get('/breeds/list/all')
        .then(result => {
          const objectOfBreeds = result.data.message;
          const breeds = Object.keys(objectOfBreeds);
          resolve(breeds);
        })
        .catch(error => reject(error));
    });
  },
  listSubBreeds: breed => { }
};

export default DOG_BREED_SERVICE;
