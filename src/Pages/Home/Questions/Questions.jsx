import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Container from "../../Shared/Container";
import SectionTitle from "../../../components/SectionTitle";

const Questions = () => {
  return (
    <Container>
      <div>
        <SectionTitle heading="FREQUENTLY ASKED QUESTIONS" />
        <Tabs className='mb-10'>
          <TabList className="btn-group btn-group-vertical lg:btn-group-horizontal text-white ml-60 ">
            <Tab className="btn  w-96" style={{ backgroundColor: "#07332F" }}>
              General Information
            </Tab>
            <Tab className="btn w-96">Registration and Enrollment</Tab>
            <Tab className="btn w-96">Camp Activities and Workshops</Tab>
            {/* Add more Tab components for additional questions */}
          </TabList>

          <TabPanel>
            <div className="collapse collapse-plus bg-gray-300 mt-4">
              <input type="radio" name="my-accordion-3" checked="checked" />
              <div className="collapse-title text-2xl text-[#07332F] font-bold">
                What is Artisans Camp?
              </div>
              <div className="collapse-content text-lg text-gray-600 font-bold">
                <p>
                  Artisans Camp is an immersive art and craft program that
                  offers participants a unique and creative experience. With a
                  variety of workshops and classes, participants have the
                  opportunity to learn and explore different art forms such as
                  painting, pottery, jewelry making, and more. Led by
                  experienced instructors, the camp aims to foster artistic
                  growth and provide a supportive environment for participants
                  to express their creativity. Whether you are a beginner or an
                  experienced artist, Artisans Camp offers a range of activities
                  suited to different skill levels. Join us for a memorable and
                  inspiring artistic journey at Artisans Camp.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-gray-300 mt-4">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-2xl text-[#07332F] font-bold">
                Where is Artisans Camp located?
              </div>
              <div className="collapse-content text-lg text-gray-600 font-bold">
                <p>
                  Artisans Camp is located in a scenic and picturesque setting,
                  nestled in Dhaka,Bangladesh. Surrounded by natural beauty, the
                  camp provides a serene and inspiring environment for
                  participants to immerse themselves in art and craft
                  activities. The exact address and directions to the camp can
                  be obtained through registration or by contacting the camp
                  organizers directly.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-gray-300 mt-4">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-2xl text-[#07332F] font-bold">
                When does Artisans Camp take place?
              </div>
              <div className="collapse-content text-lg text-gray-600 font-bold">
                <p>
                  Artisans Camp typically takes place during specific seasons or
                  scheduled periods throughout the year. The exact dates and
                  duration of the camp can vary from year to year. It is
                  recommended to check the official Artisans Camp website or
                  contact the camp organizers directly for the most up-to-date
                  information on upcoming camp dates and registration details.
                  This will ensure that you have the accurate and current
                  information regarding the timing of Artisans Camp.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-gray-300 mt-4">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-2xl text-[#07332F] font-bold">
                How long is the camp duration?
              </div>
              <div className="collapse-content text-lg text-gray-600 font-bold">
                <p>
                  The duration of Artisans Camp can vary depending on the
                  specific program and session you choose to attend. Typically,
                  the camp offers options ranging from short-term sessions of a
                  few days to longer-term programs that span multiple weeks. The
                  duration may also depend on the intensity and depth of the art
                  and craft activities offered during the camp. For precise
                  information regarding the duration of Artisans Camp, it is
                  advisable to visit the official camp website or contact the
                  camp organizers directly. They will be able to provide you
                  with the specific details regarding the length of the camp
                  session you are interested in.
                </p>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="collapse collapse-plus bg-gray-300 mt-4">
              <input type="radio" name="my-accordion-3" checked="checked" />
              <div className="collapse-title text-2xl text-[#07332F] font-bold">
                How can I register for Artisans Camp?
              </div>
              <div className="collapse-content text-lg text-gray-600 font-bold">
                <p>
                  To register for Artisans Camp, visit their official website
                  and locate the registration section. Fill out the provided
                  registration form with your personal information, including
                  contact details and any specific preferences. Follow the
                  instructions for submitting the form and making the required
                  payment or deposit. Once your registration is processed, you
                  will receive a confirmation email or communication confirming
                  your enrollment in Artisans Camp. Stay tuned for further
                  updates and information leading up to the camp. For any
                  questions or assistance, contact the camp organizers directly
                  through the provided contact channels.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-gray-300 mt-4">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-2xl text-[#07332F] font-bold">
                What is the registration process?
              </div>
              <div className="collapse-content text-lg text-gray-600 font-bold">
                <p>
                  The registration process for Artisans Camp is simple and
                  straightforward. Visit their official website and navigate to
                  the registration page. Fill out the registration form with
                  your personal details, including your name, contact
                  information, and any specific preferences or requirements.
                  Make the required payment or deposit according to the
                  instructions provided. Submit the completed registration form
                  and payment securely through the designated method. Once your
                  registration is processed, you will receive a confirmation
                  email or notification confirming your enrollment in Artisans
                  Camp.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-gray-300 mt-4">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-2xl text-[#07332F] font-bold">
                Is there an age requirement for participants?
              </div>
              <div className="collapse-content text-lg text-gray-600 font-bold">
                <p>
                  Yes, there may be an age requirement for participants at
                  Artisans Camp. The specific age requirement can vary depending
                  on the camp's policies and the nature of the activities
                  offered. Some camps may have programs designed specifically
                  for children or teenagers, while others may cater to adults or
                  have age-specific sessions. It is advisable to check the
                  official Artisans Camp website or contact the camp organizers
                  directly to obtain accurate information about the age
                  requirements and eligibility criteria for participation. This
                  will ensure that you have the correct information regarding
                  the age restrictions for attending Artisans Camp.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-gray-300 mt-4">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-2xl text-[#07332F] font-bold">
                Are there any prerequisites or prior experience needed to join?
              </div>
              <div className="collapse-content text-lg text-gray-600 font-bold">
                <p>
                  No, Artisans Camp typically welcomes participants of all skill
                  levels, including beginners. There are generally no specific
                  prerequisites or prior experience required to join the camp.
                  Whether you are a novice or an experienced artist, the camp
                  aims to provide a supportive and inclusive environment for
                  everyone to explore and express their creativity. The
                  workshops and classes offered at Artisans Camp are designed to
                  accommodate a range of skill levels, allowing participants to
                  learn new techniques and develop their artistic abilities. So,
                  whether you're just starting your artistic journey or looking
                  to further enhance your skills, Artisans Camp can be a great
                  opportunity for you to learn, create, and grow as an artist.
                </p>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="collapse collapse-plus bg-gray-300 mt-4">
              <input type="radio" name="my-accordion-3" checked="checked" />
              <div className="collapse-title text-2xl text-[#07332F] font-bold">
                What kind of art and craft activities are offered at Artisans
                Camp?
              </div>
              <div className="collapse-content text-lg text-gray-600 font-bold">
                <p>
                  Artisans Camp offers an array of art and craft activities to
                  suit diverse interests. Participants can engage in painting,
                  pottery, jewelry making, sculpture, textile art, woodworking,
                  and more. From exploring different painting techniques to
                  creating unique ceramic pieces, the camp provides hands-on
                  opportunities to learn and experiment. Participants can
                  unleash their creativity through various mediums, allowing for
                  personal expression and artistic growth. The skilled
                  instructors guide participants of all skill levels, ensuring
                  an enriching experience for everyone involved. Join Artisans
                  Camp to immerse yourself in a world of artistic exploration
                  and inspiration.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-gray-300 mt-4">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-2xl text-[#07332F] font-bold">
                Can you provide examples of specific workshops or classes?
              </div>
              <div className="collapse-content text-lg text-gray-600 font-bold">
                <p>
                  1. Acrylic Pour Painting: Explore the mesmerizing technique of
                  acrylic pouring to create vibrant and abstract artworks with
                  beautiful flowing patterns.<br></br>
                  <br></br>
                  2. Handmade Paper Making: Learn the process of making paper
                  from scratch using recycled materials and natural fibers, and
                  create your own unique sheets of handmade paper.<br></br>
                  <br></br>
                  3. Woodworking and Carving: Discover the art of woodworking
                  and carving, where you can learn to create intricate designs
                  or functional wooden objects like bowls, boxes, or sculptures.
                  <br></br>
                  <br></br>
                  4. Textile Art and Embroidery: Dive into the world of textile
                  art and embroidery, exploring techniques like hand embroidery,
                  fabric painting, or fabric collage to create stunning textile
                  artworks or embellish garments.<br></br>
                  <br></br>
                  5. Ceramic Tile Painting: Unleash your creativity by painting
                  ceramic tiles with various techniques like underglaze
                  painting, stenciling, or sgraffito, resulting in personalized
                  and decorative tiles.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-gray-300 mt-4">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-2xl text-[#07332F] font-bold">
                Are the workshops suitable for beginners or experienced artists?
              </div>
              <div className="collapse-content text-lg text-gray-600 font-bold">
                <p>
                  The workshops at Artisans Camp are designed to cater to
                  participants of all skill levels, including both beginners and
                  experienced artists. Whether you are just starting your
                  artistic journey or have prior experience, there are workshops
                  available to suit your needs. For beginners, the workshops
                  offer a supportive and nurturing environment where you can
                  learn the basics of different art forms, acquire new skills,
                  and gain confidence in your creative abilities. The
                  instructors provide guidance and step-by-step instructions to
                  help you grasp the fundamentals and create your own
                  artwork.The workshops at Artisans Camp are designed to cater
                  to participants of all skill levels, including both beginners
                  and experienced artists. Whether you are just starting your
                  artistic journey or have prior experience, there are workshops
                  available to suit your needs. For beginners, the workshops
                  offer a supportive and nurturing environment where you can
                  learn the basics of different art forms, acquire new skills,
                  and gain confidence in your creative abilities. The
                  instructors provide guidance and step-by-step instructions to
                  help you grasp the fundamentals and create your own artwork.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-gray-300 mt-4">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-2xl text-[#07332F] font-bold">
                Will all necessary materials and tools be provided?
              </div>
              <div className="collapse-content text-lg text-gray-600 font-bold">
                <p>
                  Yes, Artisans Camp typically provides all the necessary
                  materials and tools required for the workshops and classes.
                  This ensures that participants have access to the resources
                  they need to fully engage in the artistic activities without
                  the hassle of bringing their own supplies. The camp organizers
                  understand the importance of providing a seamless and
                  convenient experience for participants, and that includes
                  supplying the appropriate materials and tools for each
                  workshop. Whether it's paints, brushes, clay, jewelry-making
                  supplies, or any other specific materials, you can expect them
                  to be provided as part of the workshop package. However, it's
                  always a good idea to check the specific details and workshop
                  descriptions provided by Artisans Camp to confirm that all
                  necessary materials will be provided. If there are any
                  exceptions or specific items that participants are required to
                  bring themselves, it will be clearly communicated in advance.
                </p>
              </div>
            </div>
          </TabPanel>
          {/* Add more TabPanel components for additional answers */}
        </Tabs>
      </div>
    </Container>
  );
};

export default Questions;
