import Instance from './axios';

const spaceId = process.env.REACT_APP_SPACEID as string;

const Api = {
  GetData: (content_type: String) => {
    return Instance.get(`/spaces/${spaceId}/entries?content_type=${content_type}&select=fields&order=sys.createdAt`);
  },
};

export default Api;
