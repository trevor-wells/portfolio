import React from 'react'
import moment from 'moment'
import Image from 'next/image'

export default function PostDetail({ post }: {post:blogPost}) {
    const getContentFragment = (index:number, text:any, obj:any, type?:string) => {
        let modifiedText = text;
    
        if (obj) {
          if (obj.bold) {
            modifiedText = (<strong key={index}>{text}</strong>);
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
            return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item:any, i:number) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
          case 'paragraph':
            return <p key={index} className="mb-8">{modifiedText.map((item:any, i:number) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
          case 'heading-four':
            return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item:any, i:number) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
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
      };
    
      return (
        <div className='rounded-lg px-4 lg:px-8 mb-8'>
          <div className="mb-8 w-full" >
            <h1 className="text-center mb-8 text-3xl font-semibold">
              {post.title}
            </h1>
            <div className="block lg:flex text-center items-center justify-center mb-8 w-full" >
              <div className="font-medium text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-[#DDB109]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>
                  {moment(post.createdAt).format('MMM DD, YYYY').toLowerCase()}
                </span>
              </div>
            </div>
            { post.videoLink ? 
              <div className="mb-8">
                <h3 className="text-xl text-center italic">Watch the madness here:</h3>
                <iframe 
                  src={post.videoLink}
                  className="w-full lg:w-2/3 md:w-4/5 p-2 h-96 mx-auto">
                </iframe>
              </div>
            :
              null
            }
            { post.content.raw.children.map((typeObj:any, index:number) => {
              const children = typeObj.children.map((item:any, itemIndex:number) => getContentFragment(itemIndex, item.text, item))
    
              return getContentFragment(index, children, typeObj, typeObj.type)
            }) }
          </div>
        </div>
      )
    }