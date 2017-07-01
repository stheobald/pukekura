import React from 'react'
import Link from 'next/link'

export default ({ id }) => (
    <div className='image'>
      <img src="/static/picture.jpg"/>
      <div className='blurb'>
        <p>Japanese hillside - Japanese hillside planting started in 1993, recognising New Plymouth's sister city relationship with Mishima. (That's in Japan)</p>
      </div>


        {/*width: 800px;
        {/*line-height: 500px;*/}
        {/*overflow: hidden;*/}
        {/*float: left;*/}
        {/*height: 500px;*/}

    <style jsx>{`
      .photo {
        min-height: 80%;
      }

      .image {
        display: inline-block;
        min-height: 80%;
        width: 600px;
        background: #333;
        color: #fff;
        text-align: center;
        vertical-align: middle;
        font-size: 40px;
        padding: 15px;
      }

      .sidebar {
        float: right;
        background: #fff;
        width: 200px;
        height: 500px;
        text-align: left;
        box-sizing: border-box;
        padding: 20px;
        font-family: Monaco;
        font-size: 11px;
      }

      .sidebarList {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }
    `}</style>
  </div>
)
