import { DownOutlined, UpOutlined } from "@ant-design/icons";
import React, { useState } from "react";

const FrequentQuestion = () => {
  const [showone, setShowOne] = useState(false);
  const [showtwo, setShowTwo] = useState(false);
  const [showthree, setShowThree] = useState(false);
  const [showfour, setShowFour] = useState(false);
  const [showfive, setShowFive] = useState(false);
  return (
    <div className="w-5/6 mx-auto">
      <div className="font-thin text-5xl text-center w-full my-5">
        Frequently asked questions
      </div>
      <div>
        <h1
          onClick={() => setShowOne(!showone)}
          className=" flex items-center font-bold text-2xl shadow-sm h-20"
        >
          {showone ? <UpOutlined /> : <DownOutlined />}
          What is a URL shortener?
        </h1>
        <p className={showone ? "block" : "hidden"}>
          A URL shortener, also known as a link shortener, seems like a simple
          tool, but it is a service that can have a dramatic impact on your
          marketing efforts. Link shorteners work by transforming any long URL
          into a shorter, more readable link. When a user clicks the shortened
          version, they’re automatically forwarded to the destination URL. Think
          of a short URL as a more descriptive and memorable nickname for your
          long webpage address. You can, for example, use a short URL like
          bit.ly/CelebrateBitly so people will have a good idea about where your
          link will lead before they click it. If you’re contributing content to
          the online world, you need a URL shortener. Make your URLs stand out
          with our easy to use free link shortener above.
        </p>
      </div>
      <div>
        <h1
          onClick={() => setShowTwo(!showtwo)}
          className="flex items-center font-bold text-2xl shadow-sm h-20"
        >
          {showtwo ? <UpOutlined /> : <DownOutlined />} Benefits of a short URL
        </h1>
        <p
          className={
            showtwo
              ? "block text-transparent bg-gradient-to-r from-gray-500 to-orange-500 bg-clip-text"
              : "hidden"
          }
        >
          How many people can even remember a long web address, especially if it
          has tons of characters and symbols? A short URL can make your link
          more memorable. Not only does it allow people to easily recall and
          share your link with others, it can also dramatically improve traffic
          to your content. On a more practical side, a short URL is also easier
          to incorporate into your collateral – whether you’re looking to engage
          with your customers offline or online. Bitly is the best URL shortener
          for everyone, from influencers to small brands to large enterprises,
          who are looking for a simple way to create, track and manage their
          links.
        </p>
      </div>
      <div>
        <h1
          onClick={() => setShowThree(!showthree)}
          className="flex items-center font-bold text-2xl shadow-sm h-20"
        >
          {showthree ? <UpOutlined /> : <DownOutlined />}
          What can a QR Code do?
        </h1>
        <p
          className={
            !showthree
              ? "hidden"
              : "block text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text"
          }
        >
          Because of its versatility, a QR Code can be programmed to do a
          multitude of things. It can be split into two formats: Dynamic and
          Static. A Dynamic QR Code is useful for businesses or nonprofits in
          their marketing strategy because of its advantages. Though it needs a
          subscription to work, it is a small price to pay compared to the
          benefits it offers. Dynamic QR Code solutions are editable, which
          means if you made a mistake and only noticed it after the QR Codes are
          printed, you can easily log in to the dashboard and fix them without
          changing the appearance of the already printed Codes.
        </p>
      </div>
      <div>
        <h1
          onClick={() => setShowFour(!showfour)}
          className="flex items-center font-bold text-2xl shadow-sm h-20"
        >
          {showfour ? <UpOutlined /> : <DownOutlined />}
          What is a QR Code?
        </h1>
        <p
          className={
            !showfour
              ? "hidden"
              : "block text-transparent bg-gradient-to-r from-green-400 to-pink-500 bg-clip-text"
          }
        >
          Quick response or QR, is a type of barcode that can store a multitude
          of information. The obvious difference between a QR Code and Barcode
          is its appearance. A QR Code is always in the shape of a square and
          contains smaller, even blocks similar to Tetris. A Barcode, on the
          other hand, has vertical bars in different thicknesses and is often
          accompanied by a serial number.
        </p>
      </div>
      <div>
        <h1
          onClick={() => setShowFive(!showfive)}
          className="flex items-center font-bold text-2xl shadow-sm h-20"
        >
          {showfive ? <UpOutlined /> : <DownOutlined />}
          Why choose SWITFSHORT?
        </h1>
        <p
          className={
            showfive
              ? "transition-all block text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text"
              : "hidden"
          }
        >
          Whether you’re sharing one link or scan or millions, our platform was
          built to help you make every point of connection between your content
          and your audience ignite action. It’s why the most recognized brands
          in the world love our platform.
        </p>
      </div>
    </div>
  );
};

export default FrequentQuestion;
