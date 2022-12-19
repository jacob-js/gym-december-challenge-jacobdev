import React from 'react'
import Article from '../../Cards/Article';
import Button from '../../ui/Button'
import Title from '../../ui/Title';

const News = () => {
    const latestNews = [
        {
            imgUrl: 'https://tum.de/fileadmin/_processed_/c/4/csm_20220803-01_035_d50bd503ce.webp',
            smallTitle: 'WirtschaftsWoche rankings',
            title: "Germany's strongest university in business sciences",
            body: "TUM has retained its ranking as Germany’s strongest research university in business sciences. The latest issue of the...",
            date: '12/16/2022',
            readTime: "2 min",
            category: "TUM in rankings"
        },
        {
            imgUrl: 'https://tum.de/fileadmin/_processed_/3/b/csm_20221117_Laura_Fabbietti_AE_-352_d2a7b51af3.webp',
            smallTitle: 'Search for dark matter',
            title: "Antihelium nuclei as messengers from the depths of the galaxy",
            body: "How are galaxies born, and what holds them together? Astronomers assume that dark matter plays an essential role. However,...",
            date: '12/13/2022',
            readTime: "2 min",
            category: "Research"
        }
    ];
    const othersNews = [
        {
            imgUrl: 'https://tum.de/fileadmin/user_upload_87/_processed_/0/8/csm_20200730_Fabian_Theis_AE_-66_7dc543a1ea.webp',
            smallTitle: 'Germany´s top research award',
            title: "Leibniz Prize for Biomathematician Fabian Theis",
            body: "Mathematician, physicist and information scientist Prof. Fabian Theis has won the 2023 Gottfried Wilhelm Leibniz Prize. The...",
            date: '12/08/2022',
            readTime: "2 min",
            category: "Research"
        },
        {
            imgUrl: 'https://tum.de/fileadmin/_processed_/7/c/csm_Foto_Nobel_d39c0165fa.webp',
            smallTitle: 'Awards for sustainability projects',
            title: "New partnership with the Nobel Sustainability Trust",
            body: "The Nobel Sustainability Trust and our university will jointly recognize international research and initiatives for...",
            date: '12/14/2022',
            readTime: "1 min",
            category: "Sustainability"
        }
    ];

  return (
    <div>
        <div className="max-w-362 mx-auto px-6 py-16">
            <div className="flex gap-6">
                <div className="w-2/4">
                    <Title text="News from TUM" />
                    <div className="text-xl text-dark-blue tracking-small leading-[32.5px] my-6">News, research results and events: everything that enthuses people at our university.</div>
                    <Button text="SEE ALL" />
                </div>
                <div className="w2/4 flex gap-6">
                    {
                        latestNews.map((art, index) =>(
                            <Article {...art} key={index} />
                        ))
                    }
                </div>
            </div>
            <div className="flex gap-6 justify-center mt-[52px]">
                {
                    othersNews.map((art, index) =>(
                        <Article {...art} key={index} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default News