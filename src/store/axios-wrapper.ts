import axios from 'axios';

export default {
  index(): any {
    return axios.get('https://api.github.com/user', {
      headers: {
        Authorization: 'Bearer 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',
      },
    });
  },
};
