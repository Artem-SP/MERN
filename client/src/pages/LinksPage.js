import React from "react";
import { set } from "mongoose";

export const LinksPage = () => {
  const {links, setLink}= useState(initialState: [])
  const {loading, request} = useHttp()
  const {token} =  useContext(AuthContext)
  const fetchLinks = useCallbock(calback: async () => {
    try {
      const fetched = await request('/api/link', 'GET', null, {
        Authorisetion: `Bearrer ${token}`
      })
      setLinks(fetched)

    } catch (e) {}
  }, deps: [token, request])

  useEffect( effect: () => {
    fetchLinks()
  }, deps: {fetchLinks})

  if(loading) {
    return <Loader>
       }

  return (
    <>
      {!loading && <LinksList links={links} />}
    </>
  );
};
