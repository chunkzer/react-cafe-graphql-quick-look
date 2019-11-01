import { useMemo } from 'react';

const useApiAuthorization = (clientId) => {

  const accessToken = useMemo(() => {
    const accessTokenUrl = `https://anilist.co/api/v2/oauth/authorize?client_id=${clientId}&response_type=token`
    fetch(accessTokenUrl).then(response => console.log('response: ', response.json()))
  }, [clientId])


  const headers = {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }

  return [headers];
}

export default useApiAuthorization;
