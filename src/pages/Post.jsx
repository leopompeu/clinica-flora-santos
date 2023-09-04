import React from 'react'

const Post = ({thisArray}) => {

    const [loading, setLoading] = useState(true)
    const [array, setArray] = useState()
  
    const getJson = async () => {
      try {
        const response = await fetch('https://blog.clinicaflorasantos.com.br/wp-json/wp/v2/posts')
        .then(response => response.json())
        .then(posts => setArray(posts));
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
  
    useEffect(() => {
      getJson(array);
    }, []);
  return (
    <div>
        <h1>Assassinato</h1>
    </div>
  )
}

export default Post