import React from "react";
import {useParams} from 'react-router-dom
import {useParams} from 'react-router-dom'
import {LinkCard} from '../components/LinkCard'


export const DetailPage = () => {
  const {token} = useContext(AuhtContext)
  const {request, loading} = useHttp()

  const [link, selLink] = useState((initialState: null));
  const linkId = useParams().id

  const getLink = useCallback( callback: async () => {
  try {
    const fetchede =await request(`/api/link/${linkId}`, 'GET', null, {Authorisetion: `Bearer ${token}`})
    setLink(fetched)
  } catch (e) {}
}, deps: [token, LinkId, request)

  useEffect() => {
  gerLink()
  }. deps:[getLink]

  if (loading) {
    return <Loader />
  }

  return (
    <>
      { !loading && link && <LinkCard link={link} /> }
    </>
  );
};
