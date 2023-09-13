import React from 'react'
import Image from 'next/Image'
import Link from 'next/Link'
import { footerLinks } from '@/constants/constants'

export const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
      <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
      {/*This allow the footer to be in a flex position wraped no matter the width with enough gaps between the elements. */}
      <div className='flex flex-col justify-start items-start gap-6 '>
      <Image
      className='object-cotain'
       src="/cartasticlogo.png"
       alt= "cartastic"
       width={118}
       height={18}/>
       <p className="text-base text-gray-700 ">
          Cartastic 2023 <br/>
          All rights reserved &copy;
       </p>
      </div>
      <div className="footer__links">
        {footerLinks.map ((link)=>(
          <div key={link.title} className="footer__link">
            <h3 className='font-bold'>{link.title}</h3>
            {link.links.map((item)=>(
              <Link key={item.title} href={item.url} className="text-gray-500">
              {item.title}
             </Link>
            ))}

          </div>
        ))}
      </div>
      </div>
      
      <div className='flex-justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10 text-gray-500'>
        <p>@2023 Cartastic All Rights Reserved</p>
        
        <div className='footer__copyrights-link'>
          <Link href="/" className='text-gray-500'>
            Privacy Policy
          </Link>
          <Link href="/" className='text-gray-500'>
            Terms & Conditions
          </Link>

        </div>

      </div>
      
    </footer>
  )
}
