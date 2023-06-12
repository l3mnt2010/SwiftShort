import { getUsers } from "@/redux/getuser.slice";
import { RootState, useAppDispatch } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { API } from "@/services/services.auth";
import FrequentQuestion from "@/components/FrequentQuestion";
import Menu from "@/components/Menu";

const Help = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <div className="w-5/6 mx-auto flex flex-col font-sans py-20 gap-10 text-white">
      <div className="h-1/2 mx-auto text-center text-3xl sm:text-6xl">
        How to use our app
      </div>
      <div className="w-5/6 mx-auto font-thin">
        <h1 className="font-bold sm:text-2xl">
          Our online short link generator is absolutely free.
        </h1>
        <p className="font-thin sm:text-xl">
          You can use this amazing tool for free. Surl.li generator — is the
          service created by HyperHost.ua. The main activity of the company is
          still providing high–quality premium hosting services and powerful VPS
          and everything else that needed for all internet projects.
        </p>
      </div>
      <div className="w-5/6 mx-auto font-thi: sm;text-xl">
        <h1 className="text-2xl font-bold">
          Surl.li is the best replacement for goo.gl
        </h1>
        <p>
          Unfortunately, the beloving Google service goo.gl is unavailable
          nowadays and clck ru is not available in some regions. But there is
          always Surl.li as the best option.Our service gives you the ability:
        </p>
        <p>- to create a really small URL</p>
        <p>- to get statistics</p>
        <p>- to contact tech. support if it is needed</p>
        <p>
          - to use the shortened link without a time limit. Besides, our service
          support https protocol. Server management and technical support of the
          short link service
        </p>
      </div>
      <div className="w-5/6 mx-auto sm:flex font-thin sm:text-xl">
        <div>
          <h1 className="font-bold text-2xl my-4">
            How does URL shortener work?
          </h1>
          <p>
            All you need to do is to enter your long URL and get its short
            version. The short URL is constantly connected with the main one. It
            will be like a link is mirror. So you do not need to worry about
            that link will stop to work. Forgot or lost your short URL? No
            problem, just enter your long URL again.
          </p>
        </div>
        <div>
          <h1 className="font-bold text-2xl my-4">
            Why is it necessary to short URLs?
          </h1>
          <p>
            The link has a huge meaning cause there can find page parameters
            sort options and etc. Also, marketers use UTM, and it makes the URL
            longer in times. It is an inconvenient way to send such a kind of
            URL. Sometimes even messengers, blogs and forums don not support
            these monstrously long links. Get a good looking URL surl.li/xxx
            with surl.li help and place your link anywhere you want.
          </p>
        </div>
      </div>
      <div className="w-5/6 font-thin mx-auto text-xl">
        <h1 className="font-bold text-2xl">
          sURL — URL shortener service with statistic
        </h1>
        <p>
          Get a short link in one click. Also, you can have full statistics for
          all shorten URLs of yours. Just put + at the end of the shortened
          link. For example, surl.li/clck — is an ordinary shortened URL and
          surl.li/clck+ includes statistics. You can see the number of clicks,
          geolocation of users, devices, and browsers. In short, you can get all
          the marketing information needed. The maximum size of the URL is 1984
          symbols. Keep it in mind.
        </p>
      </div>
      <div className="w-full sm:w-5/6">
        <FrequentQuestion />
      </div>
    </div>
  );
};

export default Help;
