// import { getStaticProps } from 'next';
import React from 'react'

function Movies({ searchParams }) {
  console.log("Genres:"+ searchParams)

  return (
    <div>
      Movies

        
    </div>
  )
}

export default Movies;

// App.getInitialProps = async () => {
//   let pageProps = {};

//   try {
//     let data = await getAppData(CLIENTID);
//     pageProps["data"] = data;
//   } catch (error) {}

//   return { pageProps };
// };
