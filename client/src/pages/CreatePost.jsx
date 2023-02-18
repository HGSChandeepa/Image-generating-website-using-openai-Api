import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { preview } from "../assets";
import { getRandomPrompt } from "../utils";
import { FormField, Loader } from "../components";
// import {
//   Form,
//   Button,
//   FormGroup,
//   FormControl,
//   ControlLabel,
// } from "react-bootstrap";

function CreatePost() {
  //this will be used to navigate to the home page
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  //states
  //state till the api is loading
  const [genaratingImage, setGenaratingImage] = useState(false);
  //loading state for the image
  const [loading, setLoading] = useState(false);

  //handle submit function
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //handleChange function
  const handleChange = (e) => {
    e.preventDefault();
  };

  //handleSurpriceme function
  const handleSupriceme = (e) => {};

  return (
    <section className=" max-w-7xl mx-auto">
      <div>
        <h1 className=" font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className=" mt-2 text-[#666e75] text-[15px] max-w-[500px] ">
          Create imaginative and visually stunning images genarated by DALL-E AL
          and share it with the community
        </p>
      </div>

      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className=" flex flex-col gap-5">
          {/* formfield component */}
          <FormField
            lableName="Your Name"
            type="text"
            name="name"
            placeholder="Samin Chandeepa"
            value={form.name}
            handleChange={handleChange}
          />

          <FormField
            lableName="Prompt"
            type="text"
            name="prompt"
            placeholder="a fortune-telling shiba inu reading your fate in a giant hamburger, digital art"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriceme
            handleSupriceme={handleSupriceme}
          />
        </div>
      </form>
    </section>
  );
}

export default CreatePost;
