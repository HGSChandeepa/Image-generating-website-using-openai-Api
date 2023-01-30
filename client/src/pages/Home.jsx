import React from "react";
//here we use usestate for functions and useeffect  for the api
import { useState, useEffect } from "react";
import { Card, FormField, Loader } from "../components";

const RenderCards = ({ data, title }) => {

  // here data?.lenght>0 means if data is true and len >1
  // If both conditions are met, the component maps through data and
  // returns an array of Card components
  //>> finally if the data is true and lenght >0  this will
  // render an array of CARD components 
  if (data?.length > 0) {

    // here the spread operator is used to pass all the properties of the post
    //obj as individual properties to the cars component
    return data.map((post) => <Card key={post._id} {...post} />);
  } else {
    return (
      <h2 className=" mt-5 font-bold text -[#6449ff] text -xl uppercase ">
        {title}
      </h2>
    );
  }
};
function Home() {
  // create a function called setloading and the initial state as false
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState([]);
  const [searchText, setsearchText] = useState("");

  return (
    <div>
      <section className=" max-w-7xl0 mx-auto">
        <div>
          <h1 className=" font-extrabold text-[#222328] text-[32px]">
            The Community Showcase
          </h1>
          <p className=" mt-2 text-[#666e75] text-[15px] max-w-[500px] ">
            Browse through a collection of imaginative and visually stunning
            images genarated by DALL-E AL
          </p>
        </div>

        <div className=" mt-16">
          <FormField />
        </div>

        <div className=" mt-10">
          {/* here we have to load the spinner if the data is still loading  */}
          {/* for this we can add a dynamic code block for our code */}

          {loading ? (
            <div className=" flex justify-center items-center">
              <Loader />
            </div>
          ) : (
            <>
              {searchText && (
                <h2 className=" font-medium text-[#666e75] text-xl mb-3">
                  showing results for{" "}
                  <span className=" text -[#222328]">{searchText}</span>
                </h2>
              )}

              <div className=" grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
                {searchText ? (
                  <RenderCards data={[]} title="No search results found" />
                ) : (
                  <RenderCards data={[]} title="No posts found" />
                )}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

export default Home;
