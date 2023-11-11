import ServicesCard from './ServiceCard'
import avocado from "../../assets/images/services/avocado.jpg";
import cattle from "../../assets/images/services/cattle.jpg";
import coal from "../../assets/images/services/coal.jpg";
import deco from "../../assets/images/services/deco-line.svg";
import salt from "../../assets/images/services/red-salt.jpg";
import rocks from "../../assets/images/services/white-rocks.jpg";

export default function Services() {
  const text1 = {
    title: 'Export and distribution of industrial and construction minerals.',
    content: `
          Our expertise in mineral export includes industrial and construction
          minerals. We excel in quality control, reliable supply, and adherence
          to international standards, ensuring you can trust us as your partner
          in this sector.
        `,
    onReadMore: () => alert('card1 clicked'),
  }

  const text2 = {
    title: 'Export of agricultural products',
    content: `
                Our agricultural product export services cover a wide range of
                items, including avocados, livestock, and perishable goods. We
                prioritize freshness and international compliance, offering a
                comprehensive solution for businesses looking to expand their
                agricultural exports.
              `,
    onReadMore: () => alert('card2 clicked'),
  }

  const images1 = (
    <div className="flex-1 flex-grow flex ">
      {/* images */}
      <img
        className="flex-1 min-w-0 object-cover"
        src={coal}
      />
      <div className="flex-1 flex flex-col">
        <img
          className="flex-[5] min-w-0 object-cover"
          src={salt}
        />
        <img
          className="flex-[3] min-w-0 object-cover"
          src={rocks}
        />
      </div>
    </div>
  )

  const images2 = (
    <div className="flex-1 flex-grow flex">
      {/* images  */}
      <img
        className="flex-1 min-w-0 object-cover "
        src={avocado}
      />
      <img
        className="flex-1 min-w-0 object-cover"
        src={cattle}
      />
    </div>
  )

  return (
    <section id="services">
      <div className="flex flex-col items-center justify-center bg-black min-h-[128px]">
        {/* header */}
        <img 
        src={deco}
        />
        <h2 className="text-white text-[35px]">Services</h2>
      </div>

      <div className="px-[2rem] py-[90px]">
        <div className=" text-[#4A5568] flex flex-col gap-[81px] max-w-[1244px] m-auto">
          <ServicesCard
            imageComponent={images1}
            title={text1.title}
            content={text1.content}
            onReadMore={text1.onReadMore}
            flip={false}
          />

          <ServicesCard
            imageComponent={images2}
            title={text2.title}
            content={text2.content}
            onReadMore={text2.onReadMore}
            flip={true}
          />
        </div>
      </div>
    </section>
  )
}
