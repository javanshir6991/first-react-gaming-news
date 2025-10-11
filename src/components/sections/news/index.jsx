import { Section } from 'lucide-react'
import CardComponent from "../../card/CardComponent";
import { useEffect, useState } from "react";


const News = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/db.json")
            .then((res) => res.json())
            .then((data) => setData(data.news))
            .catch((err) => console.error("Error loading data:", err));
    }, []);

    return (
        <section>
            <h1 className='text-6xl font-light text-[#077d07]  pt-20 bbh pb-25 text-center animate-[fadeInScale_0.6s_ease-out]'>Gaming News</h1>
            <div id='news' className="cards grid grid-cols-2 gap-9 px-25">



                {data.map((item) => (
                    <CardComponent
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                    />
                ))}

            </div>
        </section>
    )
}

export default News