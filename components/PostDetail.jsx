import React from 'react'
import moment from 'moment'

const PostDetail = ({post}) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if(obj){
        if(obj.bold) {
            modifiedText = (<b key={index}>{text}</b>)
        }
        if (obj.italic) {
            modifiedText = (<em key={index}>{text}</em>);
        }

        if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
        }
    }
    switch (type) {
        case 'heading-three':
          return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
        case 'paragraph':
          return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
        case 'heading-four':
          return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
        case 'image':
          return (
            <img
              key={index}
              alt={obj.title}
              height={obj.height}
              width={obj.width}
              src={obj.src}
            />
          );
        default:
          return modifiedText;
      }
  }
  return (
    <div className='bg-white shadow-lg rounded-lg p-4 lg:p-8 pb-12 mb-8' style={{backgroundImage: `url('../img/post-bg.png')`, backgroundSize: 'contain'}}>
        <h1 className='uppercase text-[#4f36cc]'>Categoria: {post.categorias[0].name}</h1>
        <h1 className='my-2 text-2xl lg:text-3xl font-semibold'>{post.titulo}</h1>
        <div className='lg:px-0'>
            <div className='flex items-center mb-8 w-auto'>
                <div className='flex items-center mb-4 lg:mb-0 w-full lg:w-auto lg:mr-4'>
                    {/* <img
                        alt={post.autor.nombre}
                        height='30px'
                        width='30px'
                        className='align-middle rounded-full'
                        src={post.autor.foto.url}
                    /> */}
                    <p className='inline align-middle text-gray-700 ml-2 text-sm lg:text-lg'>Por {post.autor.nombre}</p>
                  <p className='font-medium text-gray-700 mx-2 inline align-middle'>|</p>
                  <span className='font-medium text-gray-700 text-sm lg:text-md'>{moment(post.createdAt).format('DD MMM, YYYY')}</span>
                </div>
                {/* <div className='font-medium text-gray-700'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div> */}
            </div>
            <div className='relative overflow-hidden shadow-md mb-6'>
                <img
                    src={post.imagenPresentacion.url}
                    alt={post.titulo}
                    className='object-top h-full w-full'
                />
            </div>
            {post.contenido.json.children.map((typeObj, index) =>{
                const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item))

                return getContentFragment(index, children, typeObj, typeObj.type)
            })}
        </div>
    </div>
  )
}

export default PostDetail