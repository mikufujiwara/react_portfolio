import React from "react";
import pic1 from "../../Images/realestate_print_1.jpg";
import pic2 from "../../Images/realestate_print_2.jpg";
import pic3 from "../../Images/realestate_print_3.jpg";
import pic4 from "../../Images/realestate_print_4.jpg";
import pic5 from "../../Images/realestate_print_5.jpg";
import pic6 from "../../Images/realestate_print_6.jpg";
import Figure from "react-bootstrap/Figure";

function graphicPage() {
  return (
    <div className="container p-5" id="graphic">
      <div className="row d-flex justify-content-center pt-5">
        <h2 className="section-heading text-uppercase text-center mb-3">
          Graphic Design
        </h2>
        <h5 className="col-lg-8">
          I have over 2 years of experience as a graphic designer in the real
          estate industry in Tokyo!
        </h5>
        <p className="col-lg-8 pb-4">
          I designed brochures and banners to promote real estate properties
          based on local market research and buyer personas. I used Adobe
          Illustrator and Photoshop to create visually appealing marketing
          materials.
        </p>
        <Figure className="col-lg-5">
          <Figure.Image alt="pic1" src={pic1} />
          <Figure.Caption>
            This brochure highlights the benefits of this property's recent
            construction (only 3 years old) and air-conditioners and heaters in
            every room, allowing potential buyers to save on installation costs
            while enjoying a modern and comfortable home.
          </Figure.Caption>
        </Figure>
        <Figure className="col-lg-5">
          <Figure.Image alt="pic2" src={pic2} />
          <Figure.Caption>
            This brochure I created for a recently renovated property located in
            a family-friendly area known for its natural surroundings, peaceful
            atmosphere, and quality education. With a clean design and
            compelling copy, this brochure effectively highlights the property's
            unique features and benefits.
          </Figure.Caption>
        </Figure>
        <Figure className="col-lg-5">
          <Figure.Image alt="pic3" src={pic3} />
          <Figure.Caption>
            I designed a brochure for this cozy and intimate space, ideal for
            singles or couples. To appeal to younger audiences, I created a
            modern and sleek design. And to showcase its elegance and
            exclusivity, I added touches of luxury to the brochure.
          </Figure.Caption>
        </Figure>
        <Figure className="col-lg-5">
          <Figure.Image alt="pic4" src={pic4} />
          <Figure.Caption>
            I created this brochure to showcase the attractive features of this
            4-bedroom property, including a spacious balcony perfect for
            camping, which was a popular trend in Japan at the time. Ideal for
            families, this property offers ample space and a unique outdoor
            experience.
          </Figure.Caption>
        </Figure>
        <Figure className="col-lg-5">
          <Figure.Image alt="pic5" src={pic5} />
          <Figure.Caption>
            I created a brochure for this exclusive 1-bedroom property,
            targeting affluent and discerning individuals. Despite its high
            cost, the property boasts exceptional security and earthquake
            resistance, features that are highly valued in earthquake-prone
            Japan. The brochure effectively conveys a sense of safety and
            security, justifying the property's price point.
          </Figure.Caption>
        </Figure>
        <Figure className="col-lg-5">
          <Figure.Image alt="pic6" src={pic6} />
          <Figure.Caption>
            For this brochure, I had to work with limited resources since the
            property was quite old and lacked photos. However, the area is known
            for its natural beauty and convenience, so I emphasized these
            aspects with nature imagery and prominent area names. Additionally,
            the house itself is quite spacious, and I made sure to use the
            brochure space to convey its size to potential buyers.
          </Figure.Caption>
        </Figure>
      </div>
    </div>
  );
}

export default graphicPage;
