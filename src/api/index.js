// import axios from 'axios';
import documentList from '../utils/documentListData.json';
import userData from '../utils/userData.json';

// export const fetchDocumentList = () => axios.get('http://frontend.apply.crosslend.dev/documents.json', {
//     headers: {'Access-Control-Allow-Origin': '*'}
// });

export const fetchDocumentList = () => {
    return new Promise((resolve) => {
        resolve({data: documentList, status: 200});
    });
}

export const fetchUserData = () => {
    return new Promise((resolve) => {
        resolve({data: userData, status: 200});
    });
}